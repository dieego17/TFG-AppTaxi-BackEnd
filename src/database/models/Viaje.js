const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Viaje extends Model {}
Viaje.init({
    id_viaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    origen_viaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destino_viaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_viaje: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_viaje: {
        type: DataTypes.TIME,
        allowNull: false
    },
    precioTotal_viaje: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estado_viaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    factura_viaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "viaje",
    timestamps: false,
    freezeTableName: true
})

module.exports = Viaje;