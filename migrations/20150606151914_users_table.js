exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('display_name', 255).notNullable();
        table.string('first_name', 100);
        table.string('last_name', 100);
        table.string('gender');
        table.string('youtube_id', 255).unique().notNullable();
        table.string('language', 255);
        table.string('location', 255);
        table.string('last_location', 255);
        table.integer('radius_preference', 255).defaultTo(200);
        table.string('token', 255);
        table.string('refresh_token', 255);
        table.string('token_code', 255);
        table.string('profile_image', 255);
        table.boolean('is_admin').defaultTo(false);
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
