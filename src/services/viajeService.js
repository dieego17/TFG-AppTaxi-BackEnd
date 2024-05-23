const Viaje = require('../database/models/Viaje');
const Reserva = require('../database/models/Reserva');
const Taxista = require('../database/models/Taxista');
const Usuario = require('../database/models/Usuario');
const Cliente = require('../database/models/Cliente');

const getAllViajes = async (id_taxista, id_cliente, page = 1, limit = 4) => {
    const offset = (page - 1) * limit;
    const viajes = await Viaje.findAll({
        include: [
            {
                model: Reserva,
                attributes: [],
                where: {
                    id_cliente: id_cliente,
                    estado_reserva: 'Confirmada'
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
        },
        limit: parseInt(limit), 
        offset: parseInt(offset)
    });
    return viajes;
};

//GET para hacer el pdf
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

const createViajeYReserva = async (id_taxista, id_cliente, origen_viaje, destino_viaje, fecha_viaje, hora_viaje, precioTotal_viaje, factura_viaje) => {
    try {
        // Crear el viaje
        const newViaje = await Viaje.create({
            id_taxista: id_taxista,
            origen_viaje: origen_viaje,
            destino_viaje: destino_viaje,
            fecha_viaje: fecha_viaje,
            hora_viaje: hora_viaje,
            precioTotal_viaje: precioTotal_viaje,
            factura_viaje: factura_viaje,
            estado_viaje: 'Pendiente'
        });

        // Crear la reserva asociada al viaje
        const newReserva = await Reserva.create({
            id_cliente: id_cliente,
            id_viaje: newViaje.id_viaje, // Asociar la reserva con el ID del viaje recién creado
            fecha_reserva: new Date(),
            hora_reserva: new Date(),
            estado_reserva: 'Pendiente' 
        });

        return { viaje: newViaje, reserva: newReserva };
    } catch (error) {
        console.error("Error al crear el viaje y la reserva:", error);
        throw error;
    }
};



module.exports = {
    getAllViajes,
    getAllViajeCliente,
    updateEstado,
    createViajeYReserva
};
