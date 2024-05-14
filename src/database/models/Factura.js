const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Factura extends Model {}
Factura.init({
    id_factura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad_total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_factura: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "factura",
    timestamps: false,
    freezeTableName: true
})

module.exports = Factura;