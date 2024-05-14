const testimonioRouter = require("express").Router();

const testimonioController = require("../../controllers/testimonioController");

testimonioRouter.get("/", testimonioController.getAllTestimonios);

module.exports = testimonioRouter;