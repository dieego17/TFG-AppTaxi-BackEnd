const Gasto = require('../database/models/Gasto');
const Taxista = require('../database/models/Taxista');


const getAllPerdidas = async (id_taxista) => {
    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });

    if (!taxista) {
<<<<<<< HEAD
        // Manejar el caso en que no se encuentre el taxista
        return null;
    }

    // Ahora que tenemos el taxista, obtenemos todos sus gastos
    const gastos = await Gasto.findAll({
        where: {
            id_taxista: id_taxista // Suponiendo que existe un campo id_taxista en el modelo Gasto
        },
        attributes: ['descripcion_gasto', 'gasto_total'] // Seleccionar solo los atributos deseados
=======
        return null;
    }

    const gastos = await Gasto.findAll({
        where: {
            id_taxista: id_taxista 
        },
        attributes: ['id_gasto', 'descripcion_gasto', 'gasto_total', 'fecha_gasto']
>>>>>>> baef6a1 (correcting errors)
    });

    return gastos;
}


<<<<<<< HEAD
const createPerdida = async (id_taxista, descripcion_gasto, gasto_total) => {
=======
const createPerdida = async (id_taxista, descripcion_gasto, gasto_total, fecha_gasto) => {
>>>>>>> baef6a1 (correcting errors)
    
    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });
    
    if (!taxista) {
<<<<<<< HEAD
        // Manejar el caso en que no se encuentre el taxista
=======
>>>>>>> baef6a1 (correcting errors)
        return null;
    }
    
    const perdida = await Gasto.create({
        id_taxista: id_taxista,
        descripcion_gasto: descripcion_gasto,
        gasto_total: gasto_total,
<<<<<<< HEAD
        fecha_gasto: new Date()
=======
        fecha_gasto: fecha_gasto
>>>>>>> baef6a1 (correcting errors)
    });
    
    return perdida;
    
}

<<<<<<< HEAD
module.exports = {
    getAllPerdidas,
    createPerdida
=======
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
>>>>>>> baef6a1 (correcting errors)
}

