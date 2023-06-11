const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    model: {  type: String, required: true },
    priceRent: {  type: Number, required: true },
    available: { type: Boolean},
    description: { type: String},
    images: { type: String },
    seats: {  type: Number},
  },
  {
    timestamps: true,
  }
)

const carModel = mongoose.model('Car', carSchema)
module.exports = carModel
