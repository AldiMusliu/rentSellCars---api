const reviewModel = require('../models/review.model')

module.exports = {
  insert: async (values) => {
    const result = await reviewModel.create(values)
    return result
  },
}
