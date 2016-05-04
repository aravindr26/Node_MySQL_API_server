/**
 * Module dependencies.
 */
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var passport	= require('passport');
var jwt         = require('jwt-simple');

module.exports = function(app, sequilize) {
  
  // get our request parameters
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
 
  // log to console
  app.use(morgan('dev'));
 
  // Use the passport package in our application
  app.use(passport.initialize());

  sequilize.sync().then(function (err) {
    require('../app/routes')(app);
  });
  return app;
};