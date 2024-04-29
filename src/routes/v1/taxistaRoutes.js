const taxistarouter = require("express").Router();

const taxistaController = require("../../controllers/taxistaController");

taxistarouter.get("/", taxistaController.getAllTaxistas);

module.exports = taxistarouter;