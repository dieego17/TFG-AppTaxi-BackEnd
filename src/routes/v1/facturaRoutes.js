const facturaRouter = require('express').Router();


const facturaController = require('../../controllers/facturaController');

facturaRouter.get('/', facturaController.getAllFacturas);
facturaRouter.post('/', facturaController.uploadPDF);

module.exports = facturaRouter;