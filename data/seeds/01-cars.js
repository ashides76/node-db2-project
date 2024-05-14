// STRETCH
const cars = [
    {
        vin: '11111111111111',
        make: 'honda',
        model: 'civic',
        milage: 303000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '21111111111111',
        make: 'toyota',
        model: 'prius',
        milage: 300000,
        title: 'salvage',
    },
    {
        vin: '31111111111111',
        make: 'ford',
        model: 'focus',
        milage: 1500,
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