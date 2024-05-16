// DO YOUR MAGIC
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.json('getting all cars')
})
router.get('/:id', async (req, res) => {
    res.json(`getting a car with id ${req.params.id}`)
})
router.post('/', async (req, res) => {
    res.json('posting new car')
})


module.exports = router