const express = require('express')
const router = express.Router()
const carController = require('../controllers/car.controller')
const { jsonResponse } = require('../lib/helper')
const { verifyToken } = require('../middleware/auth.middleware')
const upload = require('../services/upload.service')



router.get('/all',  async (req, res) => {
  try{
    const result = await carController.getAll()
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }
})

router.get('/:id',  async (req, res) => {
  try{
    const result = await carController.getCar(req.params.id)
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }
})

router.delete('/:id', verifyToken, async (req, res) => {
  try{
    const result = await carController.deleteCar(req.params.id)
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }
})

router.post('/', upload.single('images'), verifyToken, async (req, res) => {
  try {
    const carData = {
      name: req.body.name,
      model: req.body.model,
      priceRent: parseFloat(req.body.priceRent),
      available: req.body.available === 'true',
      description: req.body.description,
      images: req.file ? req.file.filename : undefined,
      seats: parseInt(req.body.seats),
    };

    const result = await carController.add(carData)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
});


router.post('/:id', upload.single('images'), verifyToken, async (req, res) => {
  try {
    console.log(req.body);
    const carData = {
      name: req.body.name,
      model: req.body.model,
      priceRent: parseFloat(req.body.priceRent),
      available: req.body.available,
      description: req.body.description,
      images: req.file ? req.file.filename : undefined,
      seats: parseInt(req.body.seats),
    };
    
    const result = await carController.editCar(req.params.id, carData)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
});


module.exports = router
