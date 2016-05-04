var express     = require('express');
var config      = require('./config/database'); // get db config file
var User        = require('./app/models/user'); // get the mongoose model
var sequilize   = require('./config/sequilize');
var port        = process.env.PORT || 8001;
// Init the express application
var app = express();
require('./config/express')(app,sequilize);
// Start the server

app.listen(port);
console.log('There will be dragons: http://localhost:' + port);