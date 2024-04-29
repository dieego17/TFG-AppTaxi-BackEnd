const taxistaservice = require('../services/taxistaService')


const getAllTaxistas = async (req, res) =>{
    const getAllTaxistas = await taxistaservice.getAllTaxistas()
    res.json(getAllTaxistas)
}

module.exports = {
    getAllTaxistas
}