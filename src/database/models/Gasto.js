const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Gasto extends Model {}

Gasto.init({
    id_gasto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_gasto no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_gasto debe ser un número entero"
            }
        }
    },
    descripcion_gasto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo descripcion_gasto no puede ser nulo"
            },
            len: {
                args: [5, 255],
                msg: "El campo descripcion_gasto debe tener entre 5 y 255 caracteres"
            }
        }
    },
    gasto_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo gasto_total no puede ser nulo"
            },
            isFloat: {
                msg: "El campo gasto_total debe ser un número válido"
            },
            min: {
                args: [0],
                msg: "El campo gasto_total debe ser un número positivo"
            }
        }
    },
    fecha_gasto: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo fecha_gasto no puede ser nulo"
            },
            isDate: {
                msg: "El campo fecha_gasto debe ser una fecha válida"
            }
        }
    }
}, {
    sequelize,
    modelName: "gasto",
    timestamps: false,
    freezeTableName: true
});

module.exports = Gasto;
