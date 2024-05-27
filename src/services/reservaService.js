const Reserva = require('../database/models/Reserva');
const Viaje = require('../database/models/Viaje');
const Taxista = require('../database/models/Taxista');
const Cliente = require('../database/models/Cliente');
const Usuario = require('../database/models/Usuario');
const { sendEmailCancelacion } = require('../lib/email');

//Funcion para conseguir todas las reservas de un cliente
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

//Funcion para conseguir todas las reservas de un cliente que no esten los viajes hechos
const getAllReservasByCliente = async(id_cliente) => {
    const reservas = await Reserva.findAll({
        where: {
            id_cliente
        },
        include: {
            model: Viaje,
            attributes: ['origen_viaje', 'destino_viaje'],
            where:{
                estado_viaje:'Pendiente'
            }
        }
    });
    return reservas;
}

//Funcion para actualizar el estado de una reserva
const updateReserva = async (id_reserva, estado_reserva) => {
    try {
        // Actualiza la reserva en la base de datos
        const updateOneReserva = await Reserva.update(
            { estado_reserva: estado_reserva },
            { where: { id_reserva: id_reserva } }
        );
        
        // Verifica si la reserva fue actualizada correctamente
        if (updateOneReserva > 0) {
            console.log(`Reserva con ID ${id_reserva} actualizada correctamente.`);
        } else {
            console.log(`No se encontró ninguna reserva con ID ${id_reserva}.`);
        }
        
        return updateOneReserva;
    } catch (error) {
        console.error(`Error al actualizar la reserva con ID ${id_reserva}:`, error);
        throw error; 
    }
};

//Funcion para eliminar una reserva y viaje
const deleteReservaViaje = async (id_reserva) => {

    const deleteReserva = await Reserva.findOne(
        {
            where: {
                id_reserva
            },
            include: [
                {
                    model: Viaje,
                },
                {
                    model: Cliente,
                    include: {
                        model: Usuario,
                        attributes: ['correo_electronico']
                    }
                }
            ]
        }
    );

   // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

    const detalleEmail = `
    <strong>Origen:</strong> ${deleteReserva.viaje.origen_viaje}<br>
    <strong>Destino:</strong> ${deleteReserva.viaje.destino_viaje}<br>
    <strong>Fecha:</strong> ${formatearFecha(deleteReserva.viaje.fecha_viaje)}<br>
    <strong>Hora:</strong> ${deleteReserva.viaje.hora_viaje}<br>
    <strong>Precio:</strong> ${deleteReserva.viaje.precioTotal_viaje}€`;

    sendEmailCancelacion(deleteReserva.cliente.usuario.correo_electronico, detalleEmail); 

    if (!deleteReserva) {
        throw new Error('No se encontró la reserva');
    }

    await deleteReserva.destroy();

    await Viaje.destroy({
        where: {
            id_viaje: deleteReserva.id_viaje
        }
    });
  
    
    return deleteReserva;
};



module.exports = {
    getAllReservas,
    getAllReservasByCliente,
    updateReserva,
    deleteReservaViaje
};

