const express = require('express')
const Router = express.Router()
const IndexRouter = require('./index.js')

Router.use(`/index`, IndexRouter)

module.exports = Router