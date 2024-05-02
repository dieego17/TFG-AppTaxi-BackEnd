const usuarioRouter = require("express").Router();

const usuarioController = require("../../controllers/usuarioController");

usuarioRouter.get("/", usuarioController.getAllUsuarios);

module.exports = usuarioRouter;