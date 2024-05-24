const Usuarios = require('../database/models/Usuario');

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    // recibimos los datos del usuario a traves del frontend
    const { correo_electronico, contraseña } = req.body;

    console.log('correo_electronico', correo_electronico);
    console.log('contraseña', contraseña);


    const usuario = await Usuarios.findOne({ 
        where: { correo_electronico, contraseña },
        attributes:['id_usuario', 'rol', 'nombre', 'apellidos'] 
    });

    // si el usuario existe, generamos un token
    if (usuario) {
        const token = jwt.sign({ usuario }, 'appTaxio', { expiresIn: '3m' });

        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: 'Usuario no autenticado' });
    }
}


module.exports = {
    login
};
