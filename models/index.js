const { model } = require('mongoose')
const QuestSchema = require('./quest')
const TraderSchema = require('./trader')
const UserSchema = require('./user')
const ItemSchema = require('./item')

const Quest = model('Quest', QuestSchema)
const Trader = model('Trader', TraderSchema)
const User = model('User', UserSchema)
const Item = model('Item', ItemSchema)

module.exports = {
    Quest,
    Trader,
    User,
    Item
}