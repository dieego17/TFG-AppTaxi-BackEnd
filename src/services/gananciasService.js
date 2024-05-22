const Ganancias = require('../database/models/Ganancia');
const Taxista = require('../database/models/Taxista');


const getAllGanancias = async (id_taxista) =>{

    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });

    if (!taxista) {
        return null;
    }

    const ganancia = await Ganancias.findAll({
        where: {
            id_taxista: id_taxista 
        },
        attributes: ['id_ganancia','descripcion_ganancia', 'ganancia_total', 'fecha_ganancia']
    });

    return ganancia;

}

const createGanancia = async (id_taxista, descripcion_ganancia, ganancia_total) => {
    
    const taxista = await Taxista.findOne({
        where: {
            id_usuario: id_taxista
        }
    });
    
    if (!taxista) {
        return null;
    }
    
    const ganancia = await Ganancias.create({
        id_taxista: id_taxista,
        descripcion_ganancia: descripcion_ganancia,
        ganancia_total: ganancia_total,
        fecha_ganancia: new Date()
    });
    
    return ganancia;
    
}


const deleteGanancia = async (id_ganancia) => {
    const ganancia = await Ganancias.destroy({
        where: {
            id_ganancia: id_ganancia
        }
    });

    return ganancia;
}

module.exports = {
    getAllGanancias,
    createGanancia,
    deleteGanancia
}

