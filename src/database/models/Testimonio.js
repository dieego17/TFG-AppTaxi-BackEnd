<<<<<<< HEAD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Testimonio extends Model {}
=======
const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Testimonio extends Model {}

>>>>>>> baef6a1 (correcting errors)
Testimonio.init({
    id_testimonio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
<<<<<<< HEAD
        autoIncrement: true
    },
    mensaje_testimonio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_testimonio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    clasificacion_testimonio: {
        type: DataTypes.STRING,
        allowNull: false
=======
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
>>>>>>> baef6a1 (correcting errors)
    }
}, {
    sequelize,
    modelName: "testimonio",
    timestamps: false,
    freezeTableName: true
<<<<<<< HEAD
})

module.exports = Testimonio;
=======
});

module.exports = Testimonio;
>>>>>>> baef6a1 (correcting errors)
