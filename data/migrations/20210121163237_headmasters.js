
//headmaster profile endpoint

exports.up = function(knex) {
    return knex.schema.createTable('headmasters', headmaster => {
        headmaster.increments()
        headmaster.string('first_name', 510);
        headmaster.string('last_name', 510);
        headmaster.string('gender' ,510);
        headmaster.string('address' ,510);
        headmaster.specificType('gps_coordinates', 'text ARRAY');
        headmaster.string('images_drive_folder_link', 510);
        headmaster.string('headmasters_picture', 510);
        headmaster.jsonb('education_contact' ,510);
        headmaster.string('notes', 510);
        headmaster.integer('villageId');
        headmaster.integer('schoolId');
        headmaster.integer('libraryId');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('headmasters');
};
