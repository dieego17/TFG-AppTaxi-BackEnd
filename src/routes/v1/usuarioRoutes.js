const usuarioRouter = require("express").Router();

const usuarioController = require("../../controllers/usuarioController");

usuarioRouter.get("/:idTaxista", usuarioController.findClientes);


module.exports = usuarioRouter;