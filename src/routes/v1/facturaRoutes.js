const facturaRouter = require('express').Router();


const facturaController = require('../../controllers/facturaController');

facturaRouter.get('/', facturaController.getAllFacturas);

module.exports = facturaRouter;