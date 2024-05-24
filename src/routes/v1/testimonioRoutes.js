const testimonioRouter = require("express").Router();

const testimonioController = require("../../controllers/testimonioController");

// GET para obtener todos los testimonios
testimonioRouter.get("/", testimonioController.getAllTestimonios);

// POST para crear un testimonio
testimonioRouter.post("/:id_cliente", testimonioController.createTestimonio);

module.exports = testimonioRouter;