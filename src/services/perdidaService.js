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
        attributes: ['id_gasto', 'descripcion_gasto', 'gasto_total', 'fecha_gasto']
    });

    return gastos;
}


const createPerdida = async (id_taxista, descripcion_gasto, gasto_total, fecha_gasto) => {
    
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
        fecha_gasto: fecha_gasto
    });
    
    return perdida;
    
}

const deletePerdida = async (id_perdida) => {
    const perdida = await Gasto.destroy({
        where: {
            id_gasto: id_perdida
        }
    });

    return perdida;
}

module.exports = {
    getAllPerdidas,
    createPerdida,
    deletePerdida
}

