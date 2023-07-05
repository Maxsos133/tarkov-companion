const express = require('express')
const Router = express.Router()
const IndexRouter = require('./index.js')
const QuestRouter = require(`./questsRouter.js`)
const TraderRouter = require(`./tradersRouter.js`)
const UserRouter = require(`./usersRouter.js`)
const ItemRouter = require(`./itemsRouter.js`)

Router.use(`/`, IndexRouter)
Router.use(`/quests`, QuestRouter)
Router.use(`/traders`, TraderRouter)
Router.use(`/users`, UserRouter)
Router.use(`/items`, ItemRouter)

module.exports = Router