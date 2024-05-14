const Ganancias = require('../database/models/Ganancia');
const Taxista = require('../database/models/Taxista');


const getAllGanancias = async (id_taxista) =>{

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
    const ganancia = await Ganancias.findAll({
        where: {
            id_taxista: id_taxista // Suponiendo que existe un campo id_taxista en el modelo Gasto
        },
        attributes: ['descripcion_ganancia', 'ganancia_total'] // Seleccionar solo los atributos deseados
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
        // Manejar el caso en que no se encuentre el taxista
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

module.exports = {
    getAllGanancias,
    createGanancia
}

