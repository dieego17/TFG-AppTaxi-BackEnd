const { generateAccessToken, generateRefreshToken } = require("../auth/generateToken")
const Token = require("../database/models/Token")
const { getUserInfo } = require("./getUserInfo")

// Función para obtener los datos del usuario
exports.jsonResponse = function(statusCode, body) {
    return{
        statusCode: statusCode,
        body
    }
}

// Función para obtener los datos del usuario
exports.createAccessToken = function(usuario){
    return generateAccessToken(getUserInfo(usuario))
}

// Función para obtener los datos del usuario
exports.createRefreshToken = async function(usuario){
    const refreshToken = generateRefreshToken(getUserInfo(usuario))

     // Crea un nuevo registro de token de refresco en la base de datos
     const newRefreshToken = await Token.create({ token: refreshToken });

     // Devuelve el token de refresco
    return newRefreshToken
}