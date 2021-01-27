
exports.up = function(knex) {
    return knex.schema.createTable('villages', village => {
        village.increments();
        village.string('name', 510);
        village.specificType('GPS_coordinates', 'text ARRAY');
        village.string('village_contact_name',510);
        village.string('village_contact_phone',510);
        village.string('notes',510);
        village.specificType('headmasterId', 'integer ARRAY');
        village.integer('schoolId');
        village.integer('libraryId');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('villages');
};

