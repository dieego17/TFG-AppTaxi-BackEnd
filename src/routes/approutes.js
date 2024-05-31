const router = require("express").Router();

const usuarioRouter = require("./v1/usuarioRoutes")
const testimonioRouter = require("./v1/testimonioRoutes")
const clienteRouter = require("./v1/clienteRoutes")
const gananciasRouter = require("./v1/gananciasRoutes")
const perdidaRouter = require("./v1/perdidaRouter")
const reservaRouter = require('./v1/reservaRoutes')
const viajeRouter = require('./v1/viajeRoutes')
const taxistaRouter = require('./v1/taxistaRoutes')

const loginRoutes = require('./v1/loginRoutes')
const registerRoutes = require('./v1/registerRoutes')

// Routes
router.use("/v1/usuarios", usuarioRouter)
router.use("/v1/testimonios", testimonioRouter)
router.use("/v1/clientes", clienteRouter)
router.use("/v1/ganancias", gananciasRouter)
router.use("/v1/perdidas", perdidaRouter)
router.use("/v1/reservas", reservaRouter)
router.use("/v1/viajes", viajeRouter)
router.use("/v1/taxistas", taxistaRouter)

// Auth
router.use("/v1/login", loginRoutes)
router.use("/v1/register", registerRoutes)



module.exports = router;