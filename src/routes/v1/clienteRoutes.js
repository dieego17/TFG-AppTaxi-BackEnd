const clienteRouter = require('express').Router();

const clienteController = require('../../controllers/clienteController');

clienteRouter.get('/', clienteController.getAllClientes);
clienteRouter.get('/:id_cliente/detalles/:id_taxista', clienteController.getAllReservas);


module.exports = clienteRouter;
