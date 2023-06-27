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


app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  next();
});

app.use(express.static(path.join(__dirname, `public`)))



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
    setTimeout(async () => {
      res.json(req.user)
    }, 1500);
    
  } else {
    res.status(401).json({ error: 'User is not logged in' })
  }
})

const { User } = require('./models')
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

app.delete('/users/:userId/quests/:questId', async (req, res) => {
  const userId = req.params.userId
  const questId = req.params.questId

  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    const questIndex = user.quests.findIndex(quest => quest._id === questId)
    if (questIndex === -1) {
      return res.status(404).json({ error: 'quest not found' })
    }
    user.quests.splice(questIndex, 1)
    await user.save()
    res.json({ message: 'quest removed' });
  } catch (error) {
    console.error('error removing quest:', error)
    res.status(500).json({ error: 'server error' })
  }
})




app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })