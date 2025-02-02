const router = require("express").Router();

const usuarioRouter = require("./v1/usuarioRoutes")
const testimonioRouter = require("./v1/testimonioRoutes")
const clienteRouter = require("./v1/clienteRoutes")
const gananciasRouter = require("./v1/gananciasRoutes")
const perdidaRouter = require("./v1/perdidaRouter")
<<<<<<< HEAD

const login = require('./login')
const register = require('./register')
const logout = require('./logout')
const token = require('./token');
/* const authenticate = require("../auth/authenticate"); */

=======
const reservaRouter = require('./v1/reservaRoutes')
const viajeRouter = require('./v1/viajeRoutes')
const taxistaRouter = require('./v1/taxistaRoutes')
const statusRoutes = require('./v1/statusRoutes')

const loginRoutes = require('./v1/loginRoutes')
const registerRoutes = require('./v1/registerRoutes')

// Routes
router.use("/v1/status", statusRoutes)
>>>>>>> baef6a1 (correcting errors)
router.use("/v1/usuarios", usuarioRouter)
router.use("/v1/testimonios", testimonioRouter)
router.use("/v1/clientes", clienteRouter)
router.use("/v1/ganancias", gananciasRouter)
router.use("/v1/perdidas", perdidaRouter)
<<<<<<< HEAD


router.use('/v1/login', login)
router.use('/v1/register', register)

/* router.use(authenticate) */

router.use('/v1/logout', logout)
router.use('/v1/token', token)
=======
router.use("/v1/reservas", reservaRouter)
router.use("/v1/viajes", viajeRouter)
router.use("/v1/taxistas", taxistaRouter)

// Auth
router.use("/v1/login", loginRoutes)
router.use("/v1/register", registerRoutes)


>>>>>>> baef6a1 (correcting errors)

module.exports = router;