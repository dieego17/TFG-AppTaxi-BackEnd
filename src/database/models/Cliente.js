const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")
const Usuario = require("./Usuario")

class Cliente extends Usuario {}
Cliente.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    metodo_pago: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "cliente",
    timestamps: false,
    freezeTableName: true
});

module.exports = Cliente;