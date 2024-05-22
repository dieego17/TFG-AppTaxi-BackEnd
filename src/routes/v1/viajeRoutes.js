const viajeRouter = require('express').Router();


const viajeController = require('../../controllers/viajeController');

viajeRouter.get('/:id_cliente/detalles/:id_taxista', viajeController.getAllViajes);
//GET para hacer el pdf
viajeRouter.get('/:id_viaje/detalles', viajeController.getAllViajeCliente);
//UPDATE para cambiar el estado del viaje
viajeRouter.put('/:id_viaje', viajeController.updateEstado);

//POST para crear un viaje
viajeRouter.post('/:id_cliente', viajeController.createViaje);

module.exports = viajeRouter;
