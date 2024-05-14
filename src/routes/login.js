const router = require("express").Router();
const Usuario = require("../database/models/Usuario");
const { jsonResponse } = require("../lib/jsonResponse");
const bcrypt = require("bcrypt");
const { createAccessToken, createRefreshToken } = require('../lib/jsonResponse');
const { getUserInfo } = require("../lib/getUserInfo");

// Ruta para logear un usuario
router.post("/", async (req, res) => {
    // Obtener los datos del formulario
    const { correo_electronico, contraseña } = req.body;

    // Verificar si existen los datos
    if (!correo_electronico || !contraseña) {
        return res.status(400).json(jsonResponse(400, { 
            message: "Faltan datos por llenar" 
        }));
    }

    try {
        // Comprobar si el usuario existe
        const usuario = await Usuario.findOne({ where: { correo_electronico } });

        // Si el usuario no existe, enviar un mensaje de error
        if (!usuario) {
            return res.status(400).json(jsonResponse(400, { 
                message: "Usuario o contraseña incorrectas" 
            }));
        }

        // Comprobar si la contraseña encriptada es correcta con la de la bbdd
        const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
        
        if (!contraseñaValida) {
            return res.status(400).json(jsonResponse(400, { 
                message: "Usuario o contraseña incorrectas" 
            }));
        }

        // Crear el token de acceso y el token de refresco
        const accessToken = createAccessToken(usuario);
        const refreshToken = await createRefreshToken(usuario); 

        // Enviar la respuesta con los tokens y la información del usuario
        res.status(200).json(jsonResponse(200, {
            usuario: getUserInfo(usuario),
            accessToken,
            refreshToken,
        }));
    } catch (error) {
        console.error("Error en la autenticación:", error);
        return res.status(500).json(jsonResponse(500, { 
            message: "Error en el servidor" 
        }));
    }
});

module.exports = router;