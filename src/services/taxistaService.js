const Taxista = require('../database/models/Taxista')
const Viaje = require('../database/models/Viaje')
const { Op } = require('sequelize')


const getAllViajesTaxista = async (id) => {
    try {
        const viajes = await Viaje.findAll({
            include: [{
                model: Taxista,
                where: { id_usuario: id},
            }],
            where: {
                fecha_viaje: { [Op.gte]: new Date() }
            },
            order: [['fecha_viaje', 'ASC']],
            attributes:["fecha_viaje"]
        });
        return viajes;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    getAllViajesTaxista
}
