const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/questController`)

Router.get(`/`, controller.getQuests)
Router.get(`/:id`, controller.getQuestsById)

module.exports = Router