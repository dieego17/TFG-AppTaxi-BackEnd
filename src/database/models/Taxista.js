<<<<<<< HEAD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")
const Usuario = require("./Usuario")


class Taxista extends Usuario {}
=======
const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");
const Usuario = require("./Usuario");

class Taxista extends Usuario {}

>>>>>>> baef6a1 (correcting errors)
Taxista.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: Usuario,
            key: 'id_usuario'
<<<<<<< HEAD
=======
        },
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_usuario no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_usuario debe ser un número entero"
            }
>>>>>>> baef6a1 (correcting errors)
        }
    },
    num_licencia: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        allowNull: false
    },
    vehiculo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calificacion_taxista: {
        type: DataTypes.FLOAT,
        allowNull: true
=======
        allowNull: false,
        unique: true,
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
        validate: {
            notNull: {
                msg: "El campo numero_cuenta no puede ser nulo"
            },
            isAlphanumeric: {
                msg: "El campo numero_cuenta debe contener solo letras y números"
            },
            len: {
                args: [15, 34],
                msg: "El campo numero_cuenta debe tener entre 15 y 34 caracteres"
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
>>>>>>> baef6a1 (correcting errors)
    }
}, {
    sequelize,
    modelName: "taxista",
    timestamps: false,
    freezeTableName: true
});

module.exports = Taxista;
