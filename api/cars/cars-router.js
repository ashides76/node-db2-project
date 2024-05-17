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

router.get('/:id', async (req, res, next) => {
    await Car.getById(req.params.id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(next)
})

router.post('/', async (req, res) => {
    res.json('posting new car')
})


module.exports = router