/**
 * Module dependencies.
 */

var config = require('./config.js'),
    express = require('express'),
    http = require('http'),
    path = require('path'),
    mysql = require('mysql'),
    passport = require('passport'),
    mustache = require('hogan-middleware'),
    app = express();

app.configure(function() {
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session());
  app.use(express.bodyParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.engine('mustache', mustache.__express);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

// Passport setup
require('./auth/passport')(passport);
require('./routes')(app, passport);

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port' + app.get('port'));
})






