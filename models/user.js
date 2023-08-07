const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true},
    googleId: { type: String, required: true},
    email: { type: String, required: true},
    avatar: { type: String, required: true},
    quests: { type: Array, required: true},
    items: { type: Array, required: false},
  },
  { timestamps: true }
)

module.exports = userSchema