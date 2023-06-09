const { Schema } = require('mongoose')

const questSchema = new Schema(
  {
    name: { type: String, required: true},
    trader: { type: String, required: true},
    map: { type: String, required: true},
    objectives: { type: Array, required: true}
  },
  { timestamps: true }
)

module.exports = questSchema