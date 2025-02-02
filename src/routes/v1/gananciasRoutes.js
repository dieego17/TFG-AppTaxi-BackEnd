const gananciasRouter = require("express").Router();

const gananciasController = require("../../controllers/gananciasController");


gananciasRouter.get("/:id_taxista", gananciasController.getAllGanancias);
gananciasRouter.post("/:id_taxista", gananciasController.createGanancia);
<<<<<<< HEAD
=======
gananciasRouter.delete("/:id_ganancia", gananciasController.deleteGanancia);
>>>>>>> baef6a1 (correcting errors)


module.exports = gananciasRouter;