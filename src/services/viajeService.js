const Viaje = require('../database/models/Viaje');
const Reserva = require('../database/models/Reserva');
const Taxista = require('../database/models/Taxista');
const Usuario = require('../database/models/Usuario');
const Cliente = require('../database/models/Cliente');

const getAllViajes = async (id_taxista, id_cliente) => {
    const viajes = await Viaje.findAll({
        include: [
            {
                model: Reserva,
                attributes: [],
                where: {
                    id_cliente: id_cliente
                }
            },
            {
                model: Taxista,
                attributes: ['num_licencia', 'numero_cuenta', 'vehiculo'],
                include: {
                    model: Usuario,
                    attributes: ['DNI', 'nombre', 'apellidos', 'correo_electronico', 'telefono', 'direccion_usuario']
                }
            }
        ],
        where: {
            id_taxista: id_taxista
        }
    });
    return viajes;
};

const getAllViajeCliente = async (id_viaje) => {
    try {
        const viaje = await Viaje.findOne({
            where: {
                id_viaje: id_viaje
            },
            include: [
                {
                    model: Reserva,
                    include: [
                        {
                            model: Cliente,
                            include: [
                                {
                                    model: Usuario,
                                    attributes: ['DNI', 'nombre', 'apellidos', 'correo_electronico', 'direccion_usuario', 'telefono']
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        return viaje;
    } catch (error) {
        console.error("Error al obtener el viaje y los clientes:", error);
        throw error;
    }
};

const updateEstado = async (id_viaje, estado) => {

    console.log("id_viaje", id_viaje);
    console.log("estado", estado);

    try {
        const viaje = await Viaje.update({
            estado_viaje: estado
        }, {
            where: {
                id_viaje: id_viaje
            }
        });
        return viaje;
    } catch (error) {
        console.error("Error al actualizar el estado del viaje:", error);
        throw error;
    }
};


module.exports = {
    getAllViajes,
    getAllViajeCliente,
    updateEstado
};
