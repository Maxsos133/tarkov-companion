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

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })