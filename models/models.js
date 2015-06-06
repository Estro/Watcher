var config = require('../config.js'),
    knex = require('knex')(config.db);
bookshelf = require('bookshelf')(knex),

module.exports = function() {
    var model = {};

    // Users table
    model.user = bookshelf.Model.extend({
        tableName: 'users',
        idAttribute: 'id',
        hasTimestamps: ['created_at', 'updated_at'],
        videos: function() {
            return this.hasMany(models.video);
        }
    });

    // User collection
    model.users = bookshelf.Collection.extend({
        model: model.user
    });

    // Videos table
    model.video = bookshelf.Model.extend({
        tableName: 'videos',
        idAttribute: 'id',
        hasTimestamps: ['created_at', 'updated_at'],
        user: function() {
            return this.belongsToMany(models.user).query(function(qb) {
                qb.column('id',
                    'first_name',
                    'last_name',
                    'display_name',
                    'gender',
                    'profile_image',
                    'location',
                    'last_location',
                    'radius_preference',
                    'language',
                    'youtube_id'
                );
            });
        }
    });

    // User collection
    model.videoss = bookshelf.Collection.extend({
        model: model.video
    });


    return model;
}
