const Reserva = require('../database/models/Reserva');
const Viaje = require('../database/models/Viaje');
const Taxista = require('../database/models/Taxista');


const getAllReservas = async (id_cliente, id_taxista) => {
    const reservas = await Reserva.findAll({
        where: {
            id_cliente
        },
        include: {
            model: Viaje,
            attributes:[],
            include: {
                model: Taxista,
                where: {
                    id_usuario: id_taxista
                },
                attributes:[]
            }
        }
    });
    return reservas;
};


module.exports = {
    getAllReservas
};
