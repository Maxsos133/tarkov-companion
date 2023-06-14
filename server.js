const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const path = require(`path`)
const AppRouter = require(`./routes/AppRouter`)
const cookieParser = require(`cookie-parser`)
const logger = require(`morgan`)
const session = require(`express-session`)
const passport = require(`passport`)


require(`dotenv`).config()

require(`./db/index`)

require(`./db/passport`)

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, `client`)))



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
    res.locals.user = req.user
    next()
})

app.get('/', (req, res) => {
    res.send('server working')
  })


app.use(`/`, AppRouter)

app.get('/check-login', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user)
  } else {
    res.status(401).json({ error: 'User is not logged in' })
  }
})

const { User } = require('./models/')
app.post('/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const { quest } = req.body

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found.' })
    }

    const questExists = user.quests.some(existingQuest => existingQuest.name === quest.name);
    if (questExists) {
      return res.status(400).json({ error: 'Quest already added.' })
    }

    user.quests.push(quest)

    const updatedUser = await user.save();

    return res.json(updatedUser)
  } catch (error) {
    console.error('Failed to add quest:', error);
    return res.status(500).json({ error: 'Failed to add quest.' });
  }
});





app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })