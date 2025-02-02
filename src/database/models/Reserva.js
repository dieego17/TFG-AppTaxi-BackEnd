<<<<<<< HEAD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Reserva extends Model {}
=======
const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Reserva extends Model {}

>>>>>>> baef6a1 (correcting errors)
Reserva.init({
    id_reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
<<<<<<< HEAD
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_reserva: {
        type: DataTypes.TIME,
        allowNull: false
    },
    estado_reserva: {
        type: DataTypes.STRING,
        allowNull: false
=======
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_reserva no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_reserva debe ser un número entero"
            }
        }
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo fecha_reserva no puede ser nulo"
            }
        }
    },
    hora_reserva: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo hora_reserva no puede ser nulo"
            }
        }
    },
    estado_reserva: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo estado_reserva no puede ser nulo"
            },
            isIn: {
                args: [['Pendiente', 'Confirmada', 'Cancelada']],
                msg: "El campo estado_reserva debe ser uno de 'Pendiente', 'Confirmada' o 'Cancelada'"
            },
            len: {
                args: [5, 50],
                msg: "El campo estado_reserva debe tener entre 5 y 50 caracteres"
            }
        }
>>>>>>> baef6a1 (correcting errors)
    }
}, {
    sequelize,
    modelName: "reserva",
    timestamps: false,
    freezeTableName: true
<<<<<<< HEAD
})

module.exports = Reserva;
=======
});

module.exports = Reserva;
>>>>>>> baef6a1 (correcting errors)
