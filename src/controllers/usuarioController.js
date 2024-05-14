const usuarioService = require('../services/usuarioService')


const findClientes = async (req, res) =>{
    const clientes = await usuarioService.findClientes(req.params.idTaxista)
    res.json(clientes)
}


module.exports = {

    findClientes
}