const Usuario = require('../database/models/Usuario');
const bcrypt = require('bcryptjs');

// Función para iniciar sesión
const login = async (correo_electronico, contraseña) => {

    // Buscar al usuario en la base de datos
    const usuario = await Usuario.findOne({
        where: {
            correo_electronico: correo_electronico,
        }
    });

    // Si el usuario no existe, devolver un mensaje de error
    if (!usuario) {
        console.log("Usuario o contraseña incorrecta");
        return;
    }

    // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    // Si la contraseña no es válida, devolver un mensaje de error
    if (contraseñaValida) {
        return usuario;
    }else{
        console.log("Usuario o contraseña incorrecta");
        return;
    }
};

module.exports = {
    login
};
