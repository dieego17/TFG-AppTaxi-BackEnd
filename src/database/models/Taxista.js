const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");
const Usuario = require("./Usuario");

class Taxista extends Usuario {}

Taxista.init({
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
    num_licencia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo num_licencia no puede ser nulo"
            },
            len: {
                args: [5, 20],
                msg: "El campo num_licencia debe tener entre 5 y 20 caracteres"
            }
        }
    },
    numero_cuenta: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El campo numero_cuenta no puede ser nulo"
            },
            isAlphanumeric: {
                msg: "El campo numero_cuenta debe contener solo letras y números"
            },
            len: {
                args: [10, 30],
                msg: "El campo numero_cuenta debe tener entre 10 y 30 caracteres"
            }
        }
    },
    vehiculo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo vehiculo no puede ser nulo"
            },
            len: {
                args: [3, 50],
                msg: "El campo vehiculo debe tener entre 3 y 50 caracteres"
            }
        }
    }
}, {
    sequelize,
    modelName: "taxista",
    timestamps: false,
    freezeTableName: true
});

module.exports = Taxista;
