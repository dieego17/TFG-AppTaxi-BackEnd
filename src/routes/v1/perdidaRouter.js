const perdidaRouter = require("express").Router();

const perdidaController = require('../../controllers/perdidaController');


perdidaRouter.get("/:id_taxista", perdidaController.getAllPerdidas);
perdidaRouter.post("/:id_taxista", perdidaController.createPerdida);
perdidaRouter.delete("/:id_perdida", perdidaController.deletePerdida);


module.exports = perdidaRouter;