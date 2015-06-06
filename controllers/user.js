var Youtube = require("youtube-api"),
    sanitizer = require('sanitizer'),
    model = require('../models/models')();

// Not needed until start on iphone app
exports.externalLogin = function(req, res) {

    // Clean the data and set into model object
    var data = {
        token: sanitizer.sanitize(req.body.token),
        refresh_token: sanitizer.sanitize(req.body.refresh_token),
        gender: sanitizer.sanitize(req.body.gender),
        display_name: sanitizer.sanitize(req.body.display_name),
        youtube_id: sanitizer.sanitize(req.body.youtube_id),
        first_name: sanitizer.sanitize(req.body.first_name),
        last_name: sanitizer.sanitize(req.body.last_name),
        location: sanitizer.sanitize(req.body.location)
    };

    res.json(data);
};

// Not needed until start on iphone app
exports.logout = function(req, res) {
    req.logout();
    res.json({status: 'successful'});
};

exports.getUsers = function(req, res) {

    res.send('imcomplete');
};

exports.getCurrentUser = function(req, res) {
    res.send('imcomplete');

};


exports.getUserById = function(req, res) {
    res.send('imcomplete');

};

exports.createUser = function(req, res) {

    res.send('imcomplete');
};

exports.updateUser = function(req, res) {
    res.send('imcomplete');

};


exports.deleteUser = function(req, res) {
    res.send('imcomplete');

};
