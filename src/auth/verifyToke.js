const jwt = require('jsonwebtoken')

// Función para verificar el token de acceso
function verifyAccessToken(token){
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}

// Función para verificar el token de refresco
function verifyRefreshToken(token){
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}

module.exports = {
    verifyAccessToken,
    verifyRefreshToken
}
