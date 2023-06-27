const { model } = require('mongoose')
const QuestSchema = require('./quest')
const TraderSchema = require('./trader')
const UserSchema = require('./user')

const Quest = model('Quest', QuestSchema)
const Trader = model('Trader', TraderSchema)
const User = model('User', UserSchema)

module.exports = {
    Quest,
    Trader,
    User
}