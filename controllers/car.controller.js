const carService = require('../services/car.service')
module.exports = {
  add: async (params) => {
    const result = await carService.insert(params)
    return result
  },
  getAll: async () => {
    const result = await carService.get()
    return result
  },
  getCar: async (id) => {
    const result = await carService.getSingleByID(id)
    return result
  },
  deleteCar: async (id) => {
    const result = await carService.delete(id)
    return result
  },
  editCar: async (id, data) => {
    const result = await carService.editById(id, data)
    return result
  },
  deleteImage: async (id, file) => {
    let fileName = null
    if(file){
      fileName = `/images/${file.filename}` 
    }    
    const result = await carService.deleteImage(id, fileName)
    return result 
  },
  changeImage: async (id, file) => {
    let fileName = null
    if(file){
      fileName = `/images/${file.filename}` 
    }    
    const result = await carService.changeImage(id, fileName)
    return result 
  },
}