const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    model: {  type: String, required: true },
    priceRent: {  type: Number, required: true },
    priceSell: {  type: Number, required: true },
    available: { type: Boolean, index: true},
    description: { type: String},
    images: { type: String },
    seats: {  types: Number},
  },
  {
    timestamps: true,
  }
)

const carModel = mongoose.model('Car', carSchema)
module.exports = carModel
