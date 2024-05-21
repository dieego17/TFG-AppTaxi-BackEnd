const reservaService = require('../services/reservaService');

const getAllReservas = async (req, res) => {
    try {
        const { id_cliente, id_taxista } = req.params;
        const { page = 1, limit = 4 } = req.query; 
        const reservas = await reservaService.getAllReservas(id_cliente, id_taxista, parseInt(page), parseInt(limit));
        res.status(200).send(reservas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllReservas
};
