var Sequelize    = require('sequelize');

var sequelize = new Sequelize('dbname', 'root', 'root', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate().then(function (err) {
 if (err) {
    console.log('There is connection in ERROR');
 } else {
    console.log('DB Connection has been established successfully');
 }
});

module.exports = sequelize;