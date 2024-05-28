const viajeService = require('../services/viajeService');

//GET para obtener todos los viajes de un taxista
const getAllViajes = async (req, res) => {
    const { id_cliente, id_taxista } = req.params;

    try {
        const viajes = await viajeService.getAllViajes(id_taxista, id_cliente);
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

//UPDATE para cambiar el estado del viaje
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

//POST para crear un viaje
const createViaje = async (req, res) => {
    const { id_taxista, origen_viaje, destino_viaje, fecha_viaje, hora_viaje, precioTotal_viaje, metodo_pago } = req.body;
    const id_cliente = parseInt(req.params.id_cliente);

    try {
        const { viaje, reserva } = await viajeService.createViajeYReserva(id_taxista, id_cliente, origen_viaje, destino_viaje, fecha_viaje, hora_viaje, precioTotal_viaje, metodo_pago);
        res.status(201).json({ message: 'Viaje creado correctamente', viaje, reserva });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET para obtener todos los viajes de un cliente
const getAllViajesCliente = async (req, res) => {
    const {id_cliente} = req.params;

    try {
        const viajes = await viajeService.getAllViajesCliente(id_cliente);
        res.status(200).json(viajes);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

// GET para obtener los detalles de un taxista en un viaje
const getDetalleViaje = async (req, res) => {
    const { id_viaje } = req.params;

    try {
        const viaje = await viajeService.getDetalleViaje(id_viaje);
        res.status(200).json(viaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET para obtener un viaje y hacer la ruta
const getOneViajeRuta = async (req, res) => {
    const { id_viaje } = req.params;

    try {
        const viaje = await viajeService.getOneViajeRuta(id_viaje);
        res.status(200).json(viaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllViajes,
    getAllViajeCliente,
    updateEstado,
    createViaje,
    getAllViajesCliente,
    getDetalleViaje,
    getOneViajeRuta
};
