const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")


class Gasto extends Model {}
Gasto.init({
    id_gasto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion_gasto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gasto_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_gasto: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "gasto",
    timestamps: false,
    freezeTableName: true
})

module.exports = Gasto;