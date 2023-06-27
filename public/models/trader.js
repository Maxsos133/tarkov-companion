const { Schema } = require('mongoose')

const traderSchema = new Schema(
  {
    name: { type: String, required: true},
    image: { type: String, required: true},
    quests: { type: Array, required: true}
  },
  { timestamps: true }
)

module.exports = traderSchema