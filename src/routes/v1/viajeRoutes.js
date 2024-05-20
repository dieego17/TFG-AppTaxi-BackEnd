const viajeRouter = require('express').Router();


const viajeController = require('../../controllers/viajeController');

viajeRouter.get('/:id_cliente/detalles/:id_taxista', viajeController.getAllViajes);
viajeRouter.get('/:id_viaje/detalles', viajeController.getAllViajeCliente);

module.exports = viajeRouter;
