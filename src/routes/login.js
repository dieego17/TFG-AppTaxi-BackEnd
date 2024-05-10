const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponse");



// Ruta para logear un usuario
router.post("/", (req, res) => {
    // Obtener los datos del formulario
    const { correo_electronico, contraseña } = req.body;

    // comprar si existen los datos
    if (!correo_electronico || !contraseña) {
        return res.status(400).json(jsonResponse(400, { 
            message: "Faltan datos por llenar" 
        }));
    }

    const accessToken = 'access_token';
    const refreshToken = 'refresh_token';
    const usuario = {
        id: 1,
        nombre: 'Juan',
        apellidos: 'Pérez',
        telefono: '1234567890',
        correo_electronico: 'diego@correo.es'
    }

    res.status(200).json(jsonResponse(200, {
        usuario,
        accessToken,
        refreshToken,
    }));
});

module.exports = router;