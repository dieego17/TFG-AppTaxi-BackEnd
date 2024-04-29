const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Admin extends Usuario {}
Admin.init({
    num_licencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vehiculo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "admin",
    timestamps: false
});

module.exports = Admin;
