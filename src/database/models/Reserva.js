const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Reserva extends Model {}

Reserva.init({
    id_reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
            },
            isDate: {
                msg: "El campo fecha_reserva debe ser una fecha válida"
            }
        }
    },
    hora_reserva: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo hora_reserva no puede ser nulo"
            },
            isTime: {
                msg: "El campo hora_reserva debe ser una hora válida" 
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
    }
}, {
    sequelize,
    modelName: "reserva",
    timestamps: false,
    freezeTableName: true
});

module.exports = Reserva;
