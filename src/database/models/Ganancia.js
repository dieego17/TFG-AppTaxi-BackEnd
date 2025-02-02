<<<<<<< HEAD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")


class Ganancia extends Model {}
=======
const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Ganancia extends Model {}

>>>>>>> baef6a1 (correcting errors)
Ganancia.init({
    id_ganancia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
<<<<<<< HEAD
        autoIncrement: true
    },
    descripcion_ganancia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ganancia_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_ganancia: {
        type: DataTypes.DATE,
        allowNull: false
=======
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo id_ganancia no puede ser nulo"
            },
            isInt: {
                msg: "El campo id_ganancia debe ser un número entero"
            }
        }
    },
    descripcion_ganancia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo descripcion_ganancia no puede ser nulo"
            },
            len: {
                args: [5, 255],
                msg: "El campo descripcion_ganancia debe tener entre 5 y 255 caracteres"
            }
        }
    },
    ganancia_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo ganancia_total no puede ser nulo"
            },
            isFloat: {
                msg: "El campo ganancia_total debe ser un número válido"
            },
            min: {
                args: [0],
                msg: "El campo ganancia_total debe ser un número positivo"
            }
        }
    },
    fecha_ganancia: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo fecha_ganancia no puede ser nulo"
            },
            isDate: {
                msg: "El campo fecha_ganancia debe ser una fecha válida"
            }
        }
>>>>>>> baef6a1 (correcting errors)
    }
}, {
    sequelize,
    modelName: "ganancia",
    timestamps: false,
    freezeTableName: true
<<<<<<< HEAD
})

module.exports = Ganancia;
=======
});

module.exports = Ganancia;
>>>>>>> baef6a1 (correcting errors)
