const registerRouter = require("express").Router();

const registerController = require("../../controllers/registerController");

registerRouter.get("/", registerController.registerPrueba);

module.exports = registerRouter;