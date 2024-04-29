const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('apptaxi','root','',{
    host:"localhost",
    dialect:"mysql"
})
module.exports = sequelize;