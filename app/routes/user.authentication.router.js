var router = require('express').Router();
var userAuthenticationCtrl = require('../controller/user.authentication.controller.js');

console.log(userAuthenticationCtrl.userSignup);
router.get('/signup', userAuthenticationCtrl.userSignup);

module.exports = router;