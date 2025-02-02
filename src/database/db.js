const { Sequelize } = require("sequelize")

<<<<<<< HEAD
const sequelize = new Sequelize('apptaxi','root','',{
=======
const sequelize = new Sequelize('apptaxio','root','',{
>>>>>>> baef6a1 (correcting errors)
    host:"localhost",
    dialect:"mysql"
})
module.exports = sequelize;