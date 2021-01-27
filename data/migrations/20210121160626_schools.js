
exports.up = function(knex) {
    return knex.schema.createTable('schools', school => {
        school.increments();
        school.string('name', 510);
        school.integer('count_mentees_currently_enrolled');
        school.integer('count_teachers');
        school.string('school_description', 510);
        school.string('school_needs', 510);
        school.string('school_goals', 510);
        school.jsonb('dynamic_questions');
        school.string('notes', 510);
        school.specificType('headmasterId', 'integer ARRAY');
        school.integer('villageId');
        school.integer('libraryId');
       

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('schools');
};