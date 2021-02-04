
exports.seed = function(knex) {
      return knex('pairs').insert([
        {id: 1, mentor_id: 9, mentee_id: 0},
        {id: 2, mentor_id: 10, mentee_id: 1},
      ]);
};
