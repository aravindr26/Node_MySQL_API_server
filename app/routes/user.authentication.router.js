var router = require('express').Router();
var userAuthenticationCtrl = require('../controller/user.authentication.controller.js');
console.log('in router');
router.post('/signup', userAuthenticationCtrl.userSignup);
router.get('/login', userAuthenticationCtrl.userLogin);

module.exports = router;