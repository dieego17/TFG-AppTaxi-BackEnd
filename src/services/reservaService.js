const Reserva = require('../database/models/Reserva');
const Viaje = require('../database/models/Viaje');
const Taxista = require('../database/models/Taxista');

const getAllReservas = async (id_cliente, id_taxista, page = 1, limit = 4) => {
    const offset = (page - 1) * limit;
    const reservas = await Reserva.findAll({
        where: {
            id_cliente
        },
        include: {
            model: Viaje,
            attributes: [],
            include: {
                model: Taxista,
                where: {
                    id_usuario: id_taxista
                },
                attributes: []
            }
        },
        offset,
        limit
    });
    return reservas;
};

module.exports = {
    getAllReservas
};

