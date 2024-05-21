const Gasto = require('../database/models/Gasto');
const Taxista = require('../database/models/Taxista');


const getAllPerdidas = async (id_taxista) => {
    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });

    if (!taxista) {
        return null;
    }

    const gastos = await Gasto.findAll({
        where: {
            id_taxista: id_taxista 
        },
        attributes: ['descripcion_gasto', 'gasto_total']
    });

    return gastos;
}


const createPerdida = async (id_taxista, descripcion_gasto, gasto_total) => {
    
    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });
    
    if (!taxista) {
        return null;
    }
    
    const perdida = await Gasto.create({
        id_taxista: id_taxista,
        descripcion_gasto: descripcion_gasto,
        gasto_total: gasto_total,
        fecha_gasto: new Date()
    });
    
    return perdida;
    
}

module.exports = {
    getAllPerdidas,
    createPerdida
}

