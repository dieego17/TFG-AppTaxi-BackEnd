const gananciasRouter = require("express").Router();

const gananciasController = require("../../controllers/gananciasController");


gananciasRouter.get("/:id_taxista", gananciasController.getAllGanancias);
gananciasRouter.post("/:id_taxista", gananciasController.createGanancia);
gananciasRouter.delete("/:id_ganancia", gananciasController.deleteGanancia);


module.exports = gananciasRouter;