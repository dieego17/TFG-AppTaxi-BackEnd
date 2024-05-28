const reservaService = require('../services/reservaService');

//Funcion para conseguir todas las reservas de un cliente
const getAllReservas = async (req, res) => {
    try {
        const { id_cliente, id_taxista } = req.params;
        const { page = 1, limit = 3 } = req.query; 
        const reservas = await reservaService.getAllReservas(id_cliente, id_taxista, parseInt(page), parseInt(limit));
        res.status(200).send(reservas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//Funcion para conseguir todas las reservas de un cliente que no esten los viajes hechos
const getAllReservasByCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const reservas = await reservaService.getAllReservasByCliente(id_cliente);
        res.status(200).send(reservas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//Funcion para actualizar el estado de una reserva
const updateReserva = async (req, res) => {
    try {
        const id_reserva = req.params.id_reserva;
        const { estado_reserva } = req.body;
        const reserva = await reservaService.updateReserva(id_reserva, estado_reserva);
        res.status(200).send(reserva);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//Funcion para eliminar una reserva y viaje
const deleteReservaViaje = async (req, res) => {
    try {
        const id_reserva = req.params.id_reserva;
        const reserva = await reservaService.deleteReservaViaje(id_reserva);
        res.status(200).send(reserva);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAllReservas,
    getAllReservasByCliente,
    updateReserva,
    deleteReservaViaje
};
