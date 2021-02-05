
exports.up = function(knex) {
  return knex.schema.createTable('pairs', pair => {
      pair.increments()
      pair.integer('mentor_id').references('id').inTable('mentors')
      pair.integer('mentee_id').references('id').inTable('mentees')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pairs')
};
