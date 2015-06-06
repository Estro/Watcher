var config = require('../config.js'),
    GoogleStrategy = require('passport-google-oauth2').Strategy,
    model = require('../models/models')(),
    async = require('async');


module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(user_id, done) {
        new model.user({
            id: user_id
        }).fetch().then(function(user) {
            return done(null, user);
        }, function(error) {
            return done(error);
        });
    });

    passport.use(new GoogleStrategy(config.youtube,
        function(request, accessToken, refreshToken, profile, done) {
            async.waterfall([

                    function(callback) {
                        new model.user({
                            youtube_id: profile.id
                        }).fetch().then(function(userProfile) {
                            callback(null, userProfile);
                        });
                    },
                    function(userProfile, callback) {
                        new model.user(userProfile ? {
                            id: userProfile.id
                        } : null).save({
                            token: accessToken,
                            refresh_token: refreshToken,
                            gender: profile.gender,
                            display_name: profile.displayName,
                            youtube_id: profile.id,
                            first_name: profile.name.givenName,
                            last_name: profile.name.familyName,
                            location: profile.placesLived[0].value
                        }).then(function(user) {
                            callback(null, user);
                        });
                    }
                ],
                function(err, result) {
                    return done(null, result);
                });
        }
    ));

};
