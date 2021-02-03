// get all mentor pairings
exports.up = function(knex) {
    return knex.schema.createTable('mentees', mentee => {
        mentee.increments();
        mentee.string('first_name',510);
        mentee.string('last_name',510);
        mentee.string('gender',510);
        mentee.string('email', 510)
        mentee.string('primary_language',510);
        mentee.string('dob',510);
        mentee.boolean('active').notNullable().defaultTo(0)
        mentee.string('mentee_picture', 510);
        mentee.string('english_lvl',510);
        mentee.string('math_lvl',510);
        mentee.string('reading_lvl',510);
        mentee.string('school_lvl',510);
        mentee.string('academic_description', 510);
        mentee.string('support_needed', 510);
        mentee.jsonb('availability');
        mentee.jsonb('dynamic_questions');
     

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('mentees');  
};
