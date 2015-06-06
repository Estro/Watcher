exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_video', function(table) {
        table.increments();
        table.integer('user_id');
        table.integer('video_id');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_video');
};
