// DO YOUR MAGIC
const express = require('express')
const router = express.Router()
const Car = require('./cars-model')

router.get('/', async (req, res, next) => {
    await Car.getAll()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(next)
})
router.get('/:id', async (req, res) => {
    res.json(`getting a car with id ${req.params.id}`)
})
router.post('/', async (req, res) => {
    res.json('posting new car')
})


module.exports = router