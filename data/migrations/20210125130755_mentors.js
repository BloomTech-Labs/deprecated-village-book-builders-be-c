// get all mentor pairings
exports.up = function(knex) {
    return knex.schema.createTable('mentors', mentor => {
        mentor.increments();
        mentor.string('first_name',510);
        mentor.string('last_name',510);
        mentor.string('gender',510);
        mentor.string('email', 510)
        mentor.string('primary_language',510);
        mentor.string('dob',510);
        mentor.string('mentor_picture', 510);
        mentor.string('english_lvl',510);
        mentor.string('math_lvl',510);
        mentor.string('reading_lvl',510);
        mentor.string('school_lvl',510);
        mentor.string('academic_description', 510);
        mentor.string('support_needed', 510);
        mentor.jsonb('availability');
        mentor.jsonb('dynamic_questions');
     
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('mentors');  
};
