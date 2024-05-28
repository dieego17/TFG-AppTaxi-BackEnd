const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Viaje extends Model {}

Viaje.init({
    id_viaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_viaje no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_viaje debe ser un número entero"
            }
        }
    },
    origen_viaje: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo origen_viaje no puede ser nulo"
            },
            len: {
                args: [2, 100],
                msg: "El campo origen_viaje debe tener entre 2 y 100 caracteres"
            }
        }
    },
    destino_viaje: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo destino_viaje no puede ser nulo"
            },
            len: {
                args: [2, 100],
                msg: "El campo destino_viaje debe tener entre 2 y 100 caracteres"
            }
        }
    },
    fecha_viaje: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo fecha_viaje no puede ser nulo"
            },
            isDate: {
                msg: "El campo fecha_viaje debe ser una fecha válida"
            }
        }
    },
    hora_viaje: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo hora_viaje no puede ser nulo"
            },
            isTime: {
                msg: "El campo hora_viaje debe ser una hora válida"
            }
        }
    },
    precioTotal_viaje: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo precioTotal_viaje no puede ser nulo"
            },
            isFloat: {
                msg: "El campo precioTotal_viaje debe ser un número decimal"
            },
            min: {
                args: [0],
                msg: "El campo precioTotal_viaje no puede ser un valor negativo"
            }
        }
    },
    estado_viaje: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo estado_viaje no puede ser nulo"
            },
            isIn: {
                args: [['Pendiente', 'Confirmado', 'Cancelado']],
                msg: "El campo estado_viaje debe ser uno de 'Pendiente', 'Confirmado' o 'Cancelado'"
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
            len: {
                args: [2, 50],
                msg: "El campo metodo_pago debe tener entre 2 y 50 caracteres"
            }
        }
    }
}, {
    sequelize,
    modelName: "viaje",
    timestamps: false,
    freezeTableName: true
});

module.exports = Viaje;
