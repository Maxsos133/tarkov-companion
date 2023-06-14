const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/questController`)

Router.get(`/`, controller.getQuests)
Router.get(`/:name`, controller.getQuestsByName)

module.exports = Router