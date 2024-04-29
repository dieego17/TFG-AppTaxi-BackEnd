const Taxista = require('../database/models/Taxista')


const getAllTaxistas = async () =>{
    const Taxistas = await Taxista.findAll()
    return Taxistas
}


module.exports = {
    getAllTaxistas
}