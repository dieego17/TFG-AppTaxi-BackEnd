const jwt = require('jsonwebtoken');

// Función para firmar el token
function sign(payload, isAccessToken){
    return jwt.sign(payload, isAccessToken ? process.env.ACCESS_TOKEN_SECRET : process.env.REFRESH_TOKEN_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: 3600
        }
    )
}

// Función para generar el token de acceso
function generateAccessToken(usuario){
    return sign({usuario}, true)
}

// Función para generar el token de refresco
function generateRefreshToken(usuario){
    return sign({usuario}, false)
}


module.exports = {
    generateAccessToken,
    generateRefreshToken
}