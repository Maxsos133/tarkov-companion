const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true},
    googleId: { type: String, required: true},
    email: { type: String, required: true},
    avatar: { type: String, required: true}
  },
  { timestamps: true }
)

module.exports = userSchema