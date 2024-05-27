const loginService = require('../services/loginService');
const jwt = require('jsonwebtoken');

// Función para iniciar sesión
const login = async (req, res) => {
    // Obtener el correo electrónico y la contraseña del cuerpo de la petición
    const { correo_electronico, contraseña } = req.body;

    // Buscar al usuario en la base de datos
    const usuario = await loginService.login(correo_electronico, contraseña);

    // Si el usuario no existe, devolver un mensaje de error
    if (!usuario) {
        return res.status(401).json({
            message: "Usuario o contraseña incorrecta"
        });
    }else{

        // Crear un token con la información del usuario
        const token = jwt.sign({
            id: usuario.id,
            correo_electronico: usuario.correo_electronico,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            rol: usuario.rol
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        return res.send({token})
    }
};

module.exports = {
    login
};
