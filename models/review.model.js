const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const reviewModel = mongoose.model('Review', reviewSchema)
module.exports = reviewModel
