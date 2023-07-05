const { Schema } = require('mongoose')

const itemSchema = new Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: false},
    image: { type: String, required: true}
  },
  { timestamps: true }
)

module.exports = itemSchema