const Cliente = require('../database/models/Cliente');
const Usuario = require('../database/models/Usuario');
const Reserva = require('../database/models/Reserva');
const Viaje = require('../database/models/Viaje');
const Taxista = require('../database/models/Taxista');


const getAllClientes = async () =>{
    const Clientes = await Cliente.findAll({
        include:[{
            model: Usuario,
            attributes: ['id_usuario', 'nombre', 'apellidos', 'correo_electronico', 'rol', 'telefono']
        }
        ],
    })
    return Clientes
}


const getAllReservas = async (idCliente, idTaxista) => {
    const allReserva = await Cliente.findAll({
        include: [{
            model: Reserva,
            attributes: ['id_reserva', 'fecha_reserva', 'hora_reserva', 'estado_reserva'],
            include: [{
                model: Viaje,
                attributes: ['id_viaje', 'fecha_viaje', 'hora_viaje', 'origen_viaje', 'destino_viaje', 'precioTotal_viaje', 'estado_viaje'],
                include: [{
                    model: Taxista,
                    attributes: [],
                    where: {
                        id_usuario: idTaxista
                    }
                }]
            }]
        }],
        where: {
            id_usuario: idCliente
        }
    });

    return allReserva;
};


module.exports = {  
    getAllClientes,
    getAllReservas
}