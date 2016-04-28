'use strict';

var userAuthenticationAPI = require('./user.authentication.router');

module.exports = function (app) {
  app.use('/userAuthentication', userAuthenticationAPI);
};
