const Usuario = require('../database/models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginUser = async (email, password) =>{
    const oneUsuario = await Usuario.findOne({
        where: {
            correo_electronico: email,
            contraseña: password
        }
    })
    if(oneUsuario){
        /* const passwordCorrect = await bcrypt.compare(password, oneUsuario.contraseña) */
        /* if(!passwordCorrect){
            return {error: "Usuario o contraseña incorrectos"}
        }else{ */
            const token = jwt.sign({
                id: oneUsuario.id,
                email: oneUsuario.correo_electronico,
                rol: oneUsuario.rol,
                nombre: oneUsuario.nombre,
                apellido: oneUsuario.apellidos
            }, 'secret', {expiresIn: '7h'})
            
            return { usuario: oneUsuario, token: token }
        /* } */
    }else{  
        return {error: "Usuario no encontrado"}
    }
}

module.exports = {
    loginUser
}