const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")
const Usuario = require("./Usuario")


class Taxista extends Usuario {}
Taxista.init({
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
    numero_cuenta:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    vehiculo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "taxista",
    timestamps: false,
    freezeTableName: true
});

module.exports = Taxista;
