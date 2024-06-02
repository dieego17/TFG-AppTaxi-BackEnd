const usuarioRouter = require("express").Router();

const usuarioController = require("../../controllers/usuarioController");

usuarioRouter.get("/:idTaxista", usuarioController.findClientes);
usuarioRouter.get('/', usuarioController.getAllTaxistas)
usuarioRouter.get('/taxista/:id', usuarioController.getOneTaxista)

//cambiar contraseña
usuarioRouter.put('/', usuarioController.cambiarContraseña)


module.exports = usuarioRouter;