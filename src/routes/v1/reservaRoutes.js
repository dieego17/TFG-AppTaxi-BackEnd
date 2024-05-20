const reservaRouter = require('express').Router();

const reservaController = require('../../controllers/reservaController');

reservaRouter.get('/:id_cliente/detalles/:id_taxista', reservaController.getAllReservas);

module.exports = reservaRouter;
