
exports.up = function(knex) {
    return knex.schema.createTable('libraries', library => {
        library.increments();
        library.string('name',510);
        library.string('description',510);
        library.string('library_usage',510);
        library.string('notes',510);
        library.string('image',510);
        library.specificType('headmasterId', 'integer ARRAY');
        library.integer('villageId');
        library.integer('schoolId');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('libraries');
};
