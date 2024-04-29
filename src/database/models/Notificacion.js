const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Notificacion extends Model {}
Notificacion.init({
    id_notificacion: {
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
    }
}, {
    sequelize,
    modelName: "notificacion",
    timestamps: false,
    freezeTableName: true
})

module.exports = Notificacion;