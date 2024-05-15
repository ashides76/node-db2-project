exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 17).notNullable().unique()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.numeric('milage').unsighned().notNullable()
    table.string('title')
    table.string('transmission')
  });
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
