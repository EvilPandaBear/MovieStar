// DEPENDENCYS

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');

// Database connection and data model
require('./api/config/mongoose');

// passport strategy
require('./api/config/passport');

// API Routes
var movies = require('./api/routes/articles');
var users = require('./api/routes/users');
var auth = require('./api/routes/auth');
var cart = require('./api/routes/cart');


// EXPRESS APP
var app = express();

// Dependency initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// TODO app.use(passport.initialize());

// Set access headers
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

// Rest API routing
app.use('/api/movies', movies);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cart', cart);

// Angular routing
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// TODO error handler hinzufügen

module.exports = app;
