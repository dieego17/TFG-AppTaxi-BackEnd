const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")
const Usuario = require("./Usuario")


class Admin extends Usuario {}
Admin.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
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
    timestamps: false,
    freezeTableName: true
});

module.exports = Admin;
