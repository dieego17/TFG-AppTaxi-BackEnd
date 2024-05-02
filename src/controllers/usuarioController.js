const usuarioService = require('../services/usuarioService')


const getAllUsuarios = async (req, res) =>{
    const getAllUsuarios = await usuarioService.getAllUsuarios()
    res.json(getAllUsuarios)
}

module.exports = {
    getAllUsuarios
}