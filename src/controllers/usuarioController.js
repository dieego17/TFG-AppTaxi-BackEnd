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

const getAllTaxistas = async (req, res) =>{
    const AllTaxistas = await usuarioService.getAllTaxistas()
    res.json(AllTaxistas)
}


const getOneTaxista = async (req, res) => {
    const { id } = req.params;
    const taxista = await usuarioService.getOneTaxista(id);
    res.json(taxista);
}


module.exports = {
    findClientes,
    clienteFactura,
    getAllTaxistas,
    getOneTaxista
}