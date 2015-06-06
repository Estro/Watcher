exports.up = function(knex, Promise) {
    return knex.schema.createTable('videos', function(table) {
        table.increments();
        table.timestamp('publish_date');
        table.string('title', 100);
        table.text('description');
        table.string('thumbnail', 255);
        table.string('video_id', 100);
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('videos');
};
