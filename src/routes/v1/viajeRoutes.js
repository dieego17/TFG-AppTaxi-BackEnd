const viajeRouter = require('express').Router();


const viajeController = require('../../controllers/viajeController');

//GET para obtener todos los viajes de un taxista
viajeRouter.get('/:id_cliente/detalles/:id_taxista', viajeController.getAllViajes);

//GET para hacer el pdf
viajeRouter.get('/:id_viaje/detalles', viajeController.getAllViajeCliente);

//UPDATE para cambiar el estado del viaje
viajeRouter.put('/:id_viaje', viajeController.updateEstado);

//POST para crear un viaje
viajeRouter.post('/:id_cliente', viajeController.createViaje);

//GET para obtener todos los viajes de un cliente
viajeRouter.get('/detalles-cliente/:id_cliente', viajeController.getAllViajesCliente);

//GET para obtener los detalles de un taxista en un viaje
viajeRouter.get('/detalles-taxista/:id_viaje', viajeController.getDetalleViaje);

//GET para obtener un viaje y hacer la ruta
viajeRouter.get('/detalles-ruta/:id_viaje', viajeController.getOneViajeRuta);

module.exports = viajeRouter;
