const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");
const Usuario = require("./Usuario");

class Cliente extends Usuario {}

Cliente.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: Usuario,
            key: 'id_usuario'
        },
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_usuario no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_usuario debe ser un número entero"
            }
        }
    },
    metodo_pago: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo metodo_pago no puede ser nulo"
            },
            isIn: {
                args: [['Tarjeta de Crédito', 'Efectivo']],
                msg: "El método de pago debe ser con 'Tarjeta de Crédito' o 'Efectivo'"
            },
            len: {
                args: [5, 50],
                msg: "El campo metodo_pago debe tener entre 5 y 50 caracteres"
            }
        }
    }
}, {
    sequelize,
    modelName: "cliente",
    timestamps: false,
    freezeTableName: true
});

module.exports = Cliente;
