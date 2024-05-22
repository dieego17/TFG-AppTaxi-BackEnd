const viajeService = require('../services/viajeService');

const getAllViajes = async (req, res) => {
    const { id_cliente, id_taxista } = req.params;
    const { page = 1, limit = 4 } = req.query;

    try {
        const viajes = await viajeService.getAllViajes(id_taxista, id_cliente, page, limit);
        res.status(200).json(viajes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//GET para hacer el pdf
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
    const id_viaje = req.params.id_viaje; 
    const { estado_viaje } = req.body; 

    try {
        await viajeService.updateEstado(id_viaje, estado_viaje); 
        res.status(200).json({ message: 'Estado actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createViaje = async (req, res) => {
    const { id_taxista, origen_viaje, destino_viaje, fecha_viaje, hora_viaje, precioTotal_viaje, factura_viaje } = req.body;
    const id_cliente = parseInt(req.params.id_cliente);

    try {
        const { viaje, reserva } = await viajeService.createViajeYReserva(id_taxista, id_cliente, origen_viaje, destino_viaje, fecha_viaje, hora_viaje, precioTotal_viaje, factura_viaje);
        res.status(201).json({ message: 'Viaje creado correctamente', viaje, reserva });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createViaje
};

module.exports = {
    getAllViajes,
    getAllViajeCliente,
    updateEstado,
    createViaje
};
