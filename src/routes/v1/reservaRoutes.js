const reservaRouter = require('express').Router();

const reservaController = require('../../controllers/reservaController');

//Funcion para conseguir todas las reservas de un cliente
reservaRouter.get('/:id_cliente/detalles/:id_taxista', reservaController.getAllReservas);

//Funcion para conseguir todas las reservas de un cliente que no esten los viajes hechos
reservaRouter.get('/:id_cliente', reservaController.getAllReservasByCliente);

//Funcion para actualizar el estado de una reserva
reservaRouter.put('/:id_reserva', reservaController.updateReserva);

//Funcion para eliminar una reserva y viaje
reservaRouter.delete('/:id_reserva', reservaController.deleteReservaViaje);

module.exports = reservaRouter;
