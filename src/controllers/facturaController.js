const facturaService = require('../services/facturaService');

const getAllFacturas = async (req, res) => {
    const allFacturas = await facturaService.getAllFacturas()
    res.json(allFacturas)
}


module.exports = {
    getAllFacturas
}