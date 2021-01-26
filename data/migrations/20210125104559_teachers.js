exports.up = function (knex) {
  return knex.schema.createTable('teachers', (teacher) => {
    teacher.increments();
    teacher.string('first_name', 510);
    teacher.string('last_name', 510);
    teacher.string('gender', 510);
    teacher.specificType('subjects', 'text ARRAY');
    teacher.string('highest_degree', 510);
    teacher.string('home_city', 510);
    teacher.string('home_country', 510);
    teacher.string('home_timezone', 510);
    teacher.string('current_classroom', 510);
    teacher.string('phone', 510);
    teacher.string('email', 510);
    teacher.string('first_language', 510);
    teacher.specificType('other_languages', 'text ARRAY');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('teachers');
};
