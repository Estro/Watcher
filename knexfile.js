// Update with your config settings.
var config = require('./config.js');

module.exports = {

    development: {
        client: 'mysql',
        connection: config.db.connection
    },

    production: {
        client: 'mysql',
        connection: config.db.connection
    }

};
