const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Reserva extends Model {}
Reserva.init({
    id_reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    }
}, {
    sequelize,
    modelName: "reserva",
    timestamps: false,
    freezeTableName: true
})

module.exports = Reserva;