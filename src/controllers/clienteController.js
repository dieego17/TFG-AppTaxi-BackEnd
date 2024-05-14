const clienteService = require('../services/clienteService')


const getAllClientes = async (req, res) =>{
    const getAllClientes = await clienteService.getAllClientes()
    res.json(getAllClientes)
}

const getAllReservas = async (req, res) => {
    const idCliente = req.params.id_cliente
    const idTaxista = req.params.id_taxista
    const allReservas = await clienteService.getAllReservas(idCliente, idTaxista)
    res.json(allReservas)
}


module.exports = {
    getAllClientes,
    getAllReservas
}

 