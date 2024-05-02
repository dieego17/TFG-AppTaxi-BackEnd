const router = require("express").Router();

const usuarioRouter = require("./v1/usuarioRoutes")
const testimonioRouter = require("./v1/testimonioRoutes")

router.use("/v1/usuarios", usuarioRouter)
router.use("/v1/testimonios", testimonioRouter)

module.exports = router;