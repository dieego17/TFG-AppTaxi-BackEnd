const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Testimonio extends Model {}

Testimonio.init({
    id_testimonio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_testimonio no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_testimonio debe ser un número entero"
            }
        }
    },
    mensaje_testimonio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo mensaje_testimonio no puede ser nulo"
            },
            len: {
                args: [10, 500],
                msg: "El campo mensaje_testimonio debe tener entre 10 y 500 caracteres"
            }
        }
    },
    fecha_testimonio: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo fecha_testimonio no puede ser nulo"
            },
            isDate: {
                msg: "El campo fecha_testimonio debe ser una fecha válida"
            }
        }
    },
    clasificacion_testimonio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo clasificacion_testimonio no puede ser nulo"
            },
            isInt: {
                msg: "El campo clasificacion_testimonio debe ser un número entero"
            },
            min: {
                args: 1,
                msg: "El campo clasificacion_testimonio debe ser al menos 1"
            },
            max: {
                args: 5,
                msg: "El campo clasificacion_testimonio no puede ser mayor que 5"
            }
        }
    }
}, {
    sequelize,
    modelName: "testimonio",
    timestamps: false,
    freezeTableName: true
});

module.exports = Testimonio;
