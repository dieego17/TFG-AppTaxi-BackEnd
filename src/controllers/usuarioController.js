const usuarioService = require('../services/usuarioService')


const loginUser = async (req, res) =>{
    const {email, password} = req.body
    const comprobarUsuario = await usuarioService.loginUser(email, password)
    res.json(comprobarUsuario)
}

module.exports = {
    loginUser
}