const Car = require('./cars-model')

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
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
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