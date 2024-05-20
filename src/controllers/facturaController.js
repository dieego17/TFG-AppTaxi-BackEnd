const facturaService = require('../services/facturaService');

const getAllFacturas = async (req, res) => {
    const allFacturas = await facturaService.getAllFacturas()
    res.json(allFacturas)
}

const uploadPDF = async (req, res) => {
    const { file } = req
    const { id } = req.body
    const factura = await facturaService.uploadPDF(id, file)
    res.json(factura)
}


module.exports = {
    getAllFacturas,
    uploadPDF
}