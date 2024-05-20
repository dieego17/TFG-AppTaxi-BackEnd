const viajeService = require('../services/viajeService');

const getAllViajes = async (req, res) => {
    const { id_cliente, id_taxista } = req.params;

    try {
        const viajes = await viajeService.getAllViajes(id_taxista, id_cliente);
        res.status(200).json(viajes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllViajeCliente = async (req, res) => {
    const { id_viaje } = req.params;

    try {
        const viaje = await viajeService.getAllViajeCliente(id_viaje);
        res.status(200).json(viaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateEstado = async (req, res) => {
    const id_viaje = req.params.id_viaje; // Obtener id_viaje de los parámetros de la ruta
    const { estado_viaje } = req.body; // Obtener estado_viaje del cuerpo de la solicitud

    try {
        await viajeService.updateEstado(id_viaje, estado_viaje); // Pasar id_viaje y estado_viaje a la función
        res.status(200).json({ message: 'Estado actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllViajes,
    getAllViajeCliente,
    updateEstado
};
