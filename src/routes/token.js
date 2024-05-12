const getToken = require("../auth/getToken");
const { verifyRefreshToken } = require("../auth/verifyToke");
const Token = require("../database/models/Token");

const router = require("express").Router();


router.post("/", async (req, res) => {

    // Obtener el token de refresco
    const refreshToken = getToken(req.headers);

    // Verificar si el token de refresco existe
    if (refreshToken) {
        res.send("Token de refresco recibido");

        // Buscar el token de refresco en la base de datos
        const found = await Token.findOne({ token: refreshToken });
        // Verificar si el token de refresco fue encontrado
        if(found){
            res.send("Token de refresco encontrado");
            // Verificar si el token de refresco es válido
            const payload = verifyRefreshToken(found.token);
            if(payload){
                // Generar un nuevo token de acceso
                const accessToken = generateAccessToken(payload.usuario);
                // Retornar el nuevo token de acceso
                return res.json({ accessToken });
            }else{
                res.send("Token de refresco inválido");
            }
        } else {    
            res.send("Token de refresco no encontrado");
        }
    } else {
        res.send("Token de refresco no recibido");
    }

});

module.exports = router;