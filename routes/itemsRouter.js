const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/itemController`)

Router.get(`/`, controller.getItems)
Router.get(`/:name`, controller.getItemsByName)

module.exports = Router