const router = require("express").Router();

const taxistaroutes = require("./v1/taxistaRoutes")

router.use("/v1/taxista", taxistaroutes)

module.exports = router;