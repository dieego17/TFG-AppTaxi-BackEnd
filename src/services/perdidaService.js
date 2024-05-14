const Gasto = require('../database/models/Gasto');
const Taxista = require('../database/models/Taxista');


const getAllPerdidas = async (id_taxista) => {
    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });

    if (!taxista) {
        // Manejar el caso en que no se encuentre el taxista
        return null;
    }

    // Ahora que tenemos el taxista, obtenemos todos sus gastos
    const gastos = await Gasto.findAll({
        where: {
            id_taxista: id_taxista // Suponiendo que existe un campo id_taxista en el modelo Gasto
        },
        attributes: ['descripcion_gasto', 'gasto_total'] // Seleccionar solo los atributos deseados
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
        // Manejar el caso en que no se encuentre el taxista
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

