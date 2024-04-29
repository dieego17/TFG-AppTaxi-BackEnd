const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Testimonio extends Model {}
Testimonio.init({
    id_testimonio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    clasificacion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "testimonio",
    timestamps: false
})

module.exports = Testimonio;