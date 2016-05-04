module.exports = function (sequelize) {
    var model = require("../models/user")(sequelize);
    var User = model.User;
    return {
        signUp: function (req, res) {
            console.log(req);
            var newUser = {
                username: req.body.username,
                password: req.body.password,
                role: req.body.role
            }
            console.log('User--------------------------------------------------->'+User);
            User.create(newUser).then(function () {
                res.sendStatus(200);
            });
        },
        get: function (req, res) {
            User.findAll().then(function (users) {
                res.send(users);
            });
        }
    };
};