// DO YOUR MAGIC
const express = require('express')
const router = express.Router()
const Car = require('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    await Car.getAll()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(next)
})

router.get('/:id', checkCarId, async (req, res, next) => {
    await res.json(req.car)
})

router.post('/', async (req, res) => {
    res.json('posting new car')
})


module.exports = router