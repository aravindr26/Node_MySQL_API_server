var sequilize = require('../../config/sequilize');
var userService = require('../services/userServices')(sequilize);

exports.userSignup = function(req,res) {
console.log('in controller');
  userService.signUp(req,res).then(function (req,res){

  });
};

exports.userLogin = function(req, res) {
  res.send('sample status');
};