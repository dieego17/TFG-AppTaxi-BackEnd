const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('apptaxio','root','',{
    host:"localhost",
    dialect:"mysql"
})
module.exports = sequelize;