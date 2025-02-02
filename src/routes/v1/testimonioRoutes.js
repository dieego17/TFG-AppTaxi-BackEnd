const testimonioRouter = require("express").Router();

const testimonioController = require("../../controllers/testimonioController");

<<<<<<< HEAD
testimonioRouter.get("/", testimonioController.getAllTestimonios);

=======
// GET para obtener todos los testimonios
testimonioRouter.get("/", testimonioController.getAllTestimonios);

// POST para crear un testimonio
testimonioRouter.post("/:id_cliente", testimonioController.createTestimonio);

>>>>>>> baef6a1 (correcting errors)
module.exports = testimonioRouter;