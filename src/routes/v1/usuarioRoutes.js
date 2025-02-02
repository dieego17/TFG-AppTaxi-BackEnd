const usuarioRouter = require("express").Router();

const usuarioController = require("../../controllers/usuarioController");

usuarioRouter.get("/:idTaxista", usuarioController.findClientes);
<<<<<<< HEAD
=======
usuarioRouter.get('/', usuarioController.getAllTaxistas)
usuarioRouter.get('/taxista/:id', usuarioController.getOneTaxista)

//cambiar contraseña
usuarioRouter.put('/', usuarioController.cambiarContraseña)
>>>>>>> baef6a1 (correcting errors)


module.exports = usuarioRouter;