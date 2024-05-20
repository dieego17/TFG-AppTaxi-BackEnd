const reservaService = require('../services/reservaService');


const getAllReservas = async (req, res) => {
    try {
        const { id_cliente, id_taxista } = req.params;
        const reservas = await reservaService.getAllReservas(id_cliente, id_taxista);
        res.status(200).send(reservas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllReservas
};