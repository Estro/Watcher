var indexController = require('./controllers/index');
var userController = require('./controllers/user');
var videoController = require('./controllers/video');

module.exports = function(app, passport) {

    // Home
    app.get('/', indexController.home);

    // Videos
    app.get('/api/v1/videos', ensureAuthenticated, videoController.getVideos);
    app.get('/api/v1/videos/:id', ensureAuthenticated, videoController.getVideoById);
    app.put('/api/v1/videos/:id', ensureAuthenticated, videoController.updateVideo);
    app.post('/api/v1/videos', ensureAuthenticated, videoController.createVideo);
    app.delete('/api/v1/videos/:id', ensureAuthenticated, videoController.deleteVideo);

    // Users
    app.get('/api/v1/users', ensureAuthenticated, userController.getUsers);
    app.get('/api/v1/users/me', ensureAuthenticated, userController.getCurrentUser);
    app.get('/api/v1/users/:id', ensureAuthenticated, userController.getUserById);
    app.post('/api/v1/users', ensureAuthenticated, userController.createUser);
    app.put('/api/v1/users', ensureAuthenticated, userController.updateUser);
    app.delete('/api/v1/user/:id', ensureAuthenticated, userController.deleteUser);

    // Users
    app.post('/api/v1/login', userController.externalLogin);
    app.get('/api/v1/logout', ensureAuthenticated, userController.logout);


    app.get('/auth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/youtube',

        ],
        accessType: 'offline'
    }));

    app.get('/oauth2callback',
        passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/'
        }));
    //app.get('/auth/google/callback', passport.authenticate('google'));


    function ensureAuthenticated(req, res, next) {
        // Check user is autenticated and not banned.
        if (req.isAuthenticated()) {
            return next();
        }
        res.json({
            error: 'requires authentication'
        });
    };
}
