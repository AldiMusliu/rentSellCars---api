const carModel = require('../models/car.model')

module.exports = {
  insert: async (values) => {
    const result = await carModel.create(values)
    return result
  },
  get: async () => {
    const result = await carModel.find().limit(50)
    return result
  },
  getSingleByID: async (id) => {
    const result = await carModel.findById(id)
    return result
  },
  delete: async (id) => {
    const result = await carModel.findByIdAndDelete(id)
    return result
  },
  editById: async (id, data) => {
    console.log(data); // add this line
    const result = await carModel.findByIdAndUpdate(id, data, {new: true});
    return result;
  },
}
