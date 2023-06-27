const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/traderController`)

Router.get(`/`, controller.getTraders)
Router.get(`/:id`, controller.getTradersById)

module.exports = Router