// STRETCH
const cars = [
    {
        vin: 'JTHBH96S065091067',
        make: 'honda',
        model: 'civic',
        mileage: 303000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'WVWBP7AN5DE595959',
        make: 'toyota',
        model: 'prius',
        mileage: 300000,
        title: 'salvage',
    },
    {
        vin: '5N1AR2MM0FC699054',
        make: 'ford',
        model: 'focus',
        mileage: 1500,
        title: 'clean',
    },
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
       return knex('cars').insert(cars) 
    })
}

// // using async await method
// exports.seed = async function(knex) {
//     await knex('cars').truncate()
//     await knex('cars').insert(cars) 
// }