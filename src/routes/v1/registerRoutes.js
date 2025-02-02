const registerRouter = require("express").Router();

const registerController = require("../../controllers/registerController");

registerRouter.post("/taxista", registerController.createTaxista);

registerRouter.post("/cliente", registerController.createCliente);

module.exports = registerRouter;