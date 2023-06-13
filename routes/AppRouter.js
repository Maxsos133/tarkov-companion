const express = require('express')
const Router = express.Router()
const IndexRouter = require('./index.js')
const QuestRouter = require(`./questsRouter.js`)
const TraderRouter = require(`./tradersRouter.js`)
const UserRouter = require(`./usersRouter.js`)

Router.use(`/`, IndexRouter)
Router.use(`/quests`, QuestRouter)
Router.use(`/traders`, TraderRouter)
Router.use(`/users`, UserRouter)

module.exports = Router