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

router.post('/:id', verifyToken, async (req, res) => {  
  try{
    const result = await carController.editCar(req.params.id, req.body)
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }

})

router.post('/', verifyToken, async (req, res) => {
  try {
    const result = await carController.add(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
})

router.post('/edit-image/:id', verifyToken, upload.single('car-image'), async (req, res) => {
  try{
    const result = await carController.changeImage(req.params.id, req.file)
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }
})


module.exports = router
