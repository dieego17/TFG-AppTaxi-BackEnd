const Usuario = require('../database/models/Usuario')


const getAllUsuarios = async () =>{
    const Usuarios = await Usuario.findAll()
    return Usuarios
}


module.exports = {
    getAllUsuarios
}