const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();

// Importar la librería bcrypt
const bycrypt = require("bcrypt");

// Importar el modelo de Usuario
const Usuario = require("../database/models/Usuario");

// Ruta para registrar un usuario
router.post("/", async (req, res) => {
    // Obtener los datos del formulario
    const { nombre, apellidos, telefono, correo_electronico, contraseña } = req.body

    // comprar si existen los datos
    if (!nombre || !apellidos || !telefono || !correo_electronico || !contraseña) {
        return res.status(400).json(jsonResponse(400, { 
            message: "Faltan datos por llenar" 
        }));
    }

    // Comprobar si el correo electrónico ya está registrado
    const usuario = await Usuario.findOne({ where: { correo_electronico: correo_electronico } });

    // Si el usuario ya existe, enviar un mensaje de error
    if (usuario) {
        return res.status(400).json(jsonResponse(400, {
            message: "El correo electrónico ya está registrado"
        }));
    }

    // Encriptar la contraseña
    const contraseña_encriptada = await bycrypt.hash(contraseña, 10);

    // Almacenar el nuevo usuario en la base de datos con la contraseña encriptada
    Usuario.create({
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo_electronico: correo_electronico,
        contraseña: contraseña_encriptada
    })

    // Responder con un mensaje de éxito
    res.status(200).json(jsonResponse(200, {
        message: "Usuario registrado con éxito"
    }));
});

module.exports = router;