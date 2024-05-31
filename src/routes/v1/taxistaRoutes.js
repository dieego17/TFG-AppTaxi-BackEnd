const taxistaRouter = require("express").Router();

const taxistaController = require("../../controllers/taxistaController");

taxistaRouter.get("/:id", taxistaController.getAllViajesTaxista);

module.exports = taxistaRouter;