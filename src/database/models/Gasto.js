const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")


class Gasto extends Model {}
Gasto.init({
    id_gasto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripción: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gasto_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "gasto",
    timestamps: false
})

module.exports = Gasto;