const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Testimonio extends Model {}
Testimonio.init({
    id_testimonio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    }
}, {
    sequelize,
    modelName: "testimonio",
    timestamps: false,
    freezeTableName: true
})

module.exports = Testimonio;