const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Token extends Model {}
Token.init({
    id_token: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "token",
    timestamps: false,
    freezeTableName: true
})

module.exports = Token