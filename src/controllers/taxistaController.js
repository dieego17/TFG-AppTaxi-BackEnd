const taxistaService = require('../services/taxistaService');

const getAllViajesTaxista = async (req, res) => {
    const { id } = req.params;
    const viajes = await taxistaService.getAllViajesTaxista(id);
    if (viajes) {
        res.status(200).json(viajes);
    } else {
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getAllViajesTaxista
}