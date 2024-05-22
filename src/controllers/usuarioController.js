const usuarioService = require('../services/usuarioService')


const findClientes = async (req, res) =>{
    const { idTaxista } = req.params
    const clientes = await usuarioService.findClientes(idTaxista)
    res.json(clientes)
}

const clienteFactura = async (req, res) =>{
    const clienteFactura = await usuarioService.clienteFactura(req.params.idUsuario)
    res.json(clienteFactura)
}


module.exports = {
    findClientes,
    clienteFactura
}