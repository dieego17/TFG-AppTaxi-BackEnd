const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")
const Usuario = require("./Usuario")

class Cliente extends Usuario {}
Cliente.init({
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    metodo_pago: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "cliente",
    timestamps: false
});

module.exports = Cliente;