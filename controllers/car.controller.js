const carService = require('../services/car.service')
module.exports = {
  add: async (params) => {
    const result = await carService.insert(params)
    return result
  },
  getAll: async () => {
    const cars = await carService.get();
    const updatedCars = cars.map(car => {
      car.images = `http://localhost:3000/images/${car.images}`; 
      return car;
    });
    return updatedCars;
  },
  getCar: async (id) => {
    const car = await carService.getSingleByID(id)
    car.images = `http://localhost:3000/images/${car.images}`; 
    return car;
  },
  deleteCar: async (id) => {
    const result = await carService.delete(id)
    return result
  },
  editCar: async (id, data) => {
    const result = await carService.editById(id, data)
    return result
  },
}