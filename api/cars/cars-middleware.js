const Car = require('./cars-model')
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  await Car.getById(req.params.id)
  .then(car => {
    if (!car) {
      next ({
        status: 404,
        message: `Not found by id: ${req.params.id}`
      })
    } else {
      req.car = car
      next()
    }
  })
  .catch(next)

}

const checkCarPayload = (req, res, next) => {
  const carKeys = req.body
  const requireKey = ['vin', 'make', 'model', 'mileage']
  const missingKey = []
  for (const key of requireKey) {
    if (!carKeys.hasOwnProperty(key)) {
      console.log(key);
      missingKey.push(key);
    }
  }
  if (missingKey.length > 0) {
    res.status(400).json({ message: `${missingKey} is missing` })
  } 
  next()
}

const checkVinNumberValid = (req, res, next) => {
  if (vin.validate(req.body.vin)) {
    next()
  } else {
    res.json({message: `vin ${req.body.vin} is invalid`
    })
  }
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique, 
}