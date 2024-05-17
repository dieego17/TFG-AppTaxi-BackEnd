const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")


class Ganancia extends Model {}
Ganancia.init({
    id_ganancia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    }
}, {
    sequelize,
    modelName: "ganancia",
    timestamps: false,
    freezeTableName: true
})

module.exports = Ganancia;