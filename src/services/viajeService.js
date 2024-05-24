const Viaje = require('../database/models/Viaje');
const Reserva = require('../database/models/Reserva');
const Taxista = require('../database/models/Taxista');
const Usuario = require('../database/models/Usuario');
const Cliente = require('../database/models/Cliente');

//GET para obtener todos los viajes de un taxista
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

//UPDATE para cambiar el estado del viaje
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

//POST para crear un viaje
const createViajeYReserva = async (id_taxista, id_cliente, origen_viaje, destino_viaje, fecha_viaje, hora_viaje, precioTotal_viaje, factura_viaje) => {
    
    // Formatear la fecha y la hora para que coincidan con el formato de la base de datos
    const formatFecha = new Date(fecha_viaje);
    const formatHora = hora_viaje + ':00'; 

    try {
        // Comprobar que el taxista no tiene un viaje en la misma fecha
        const viajeExistente = await Viaje.findOne({
            where: {
                id_taxista: id_taxista,
                fecha_viaje: formatFecha,
                hora_viaje: formatHora
            }
        });

        // Si el taxista ya tiene un viaje en la misma fecha y hora, lanzar un error
        if (viajeExistente) {
            throw new Error("El taxista ya tiene un viaje en la misma fecha y hora");
        }else{

            // Crear el viaje
            const newViaje = await Viaje.create({
                id_taxista: id_taxista,
                origen_viaje: origen_viaje,
                destino_viaje: destino_viaje,
                fecha_viaje: formatFecha,
                hora_viaje: formatHora,
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

        }
    } catch (error) {
        console.error("Error al crear el viaje y la reserva:", error);
        throw error;
    }
};


//GET para obtener todos los viajes de un cliente
const getAllViajesCliente = async (id_cliente) => {
    try {
        const viajes = await Viaje.findAll({
            include: [
                {
                    model: Reserva,
                    where: {
                        id_cliente: id_cliente
                    }
                }
            ]
        });
        return viajes;
    } catch (error) {
        console.error("Error al obtener los viajes del cliente:", error);
        throw error;
    }
}

// GET para obtener los detalles de un taxista en un viaje
const getDetalleViaje = async (id_viaje) => {
    try {
        const viaje = await Viaje.findOne({
            where: {
                id_viaje: id_viaje
            },
            include: [
                {
                    model: Taxista,
                    attributes: ['num_licencia', 'vehiculo'],
                    include: {
                        model: Usuario,
                        attributes: ['nombre', 'apellidos',]
                    }
                }
            ]
        });
        return viaje;
    } catch (error) {
        console.error("Error al obtener el viaje y los clientes:", error);
        throw error;
    }
};


//GET para obtener un viaje y hacer la ruta
const getOneViajeRuta = async (id_viaje) => {
    try {
        const viaje = await Viaje.findOne({
            where: {
                id_viaje: id_viaje
            }
        });
        return viaje;
    } catch (error) {
        console.error("Error al obtener el viaje y los clientes:", error);
        throw error;
    }
}


module.exports = {
    getAllViajes,
    getAllViajeCliente,
    updateEstado,
    createViajeYReserva,
    getAllViajesCliente,
    getDetalleViaje,
    getOneViajeRuta
};
