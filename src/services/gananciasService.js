const Ganancias = require('../database/models/Ganancia');
const Taxista = require('../database/models/Taxista');


const getAllGanancias = async (id_taxista) =>{

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
    const ganancia = await Ganancias.findAll({
        where: {
            id_taxista: id_taxista // Suponiendo que existe un campo id_taxista en el modelo Gasto
        },
        attributes: ['descripcion_ganancia', 'ganancia_total'] // Seleccionar solo los atributos deseados
=======
        return null;
    }

    const ganancia = await Ganancias.findAll({
        where: {
            id_taxista: id_taxista 
        },
        attributes: ['id_ganancia','descripcion_ganancia', 'ganancia_total', 'fecha_ganancia']
>>>>>>> baef6a1 (correcting errors)
    });

    return ganancia;

}

<<<<<<< HEAD
const createGanancia = async (id_taxista, descripcion_ganancia, ganancia_total) => {
=======
const createGanancia = async (id_taxista, descripcion_ganancia, ganancia_total, fecha_ganancia) => {
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
    
    const ganancia = await Ganancias.create({
        id_taxista: id_taxista,
        descripcion_ganancia: descripcion_ganancia,
        ganancia_total: ganancia_total,
<<<<<<< HEAD
        fecha_ganancia: new Date()
=======
        fecha_ganancia: fecha_ganancia
>>>>>>> baef6a1 (correcting errors)
    });
    
    return ganancia;
    
}

<<<<<<< HEAD
module.exports = {
    getAllGanancias,
    createGanancia
=======

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
>>>>>>> baef6a1 (correcting errors)
}

