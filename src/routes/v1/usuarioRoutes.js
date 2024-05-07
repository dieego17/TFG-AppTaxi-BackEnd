const usuarioRouter = require("express").Router();

const usuarioController = require("../../controllers/usuarioController");

usuarioRouter.post("/", usuarioController.loginUser);

module.exports = usuarioRouter;