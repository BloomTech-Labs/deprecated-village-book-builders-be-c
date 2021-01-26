exports.up = function (knex) {
  return knex.schema.createTable('users', (users) => {
    users.increments();

    users.string('email', 255).notNullable().unique();
    users.string('password', 255).notNullable();
    users
      .enu('role', [
        'admin',
        'headmaster',
        'teacher',
        'student',
        'mentor',
        'mentee',
        'program',
        'guest',
      ])
      .notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
