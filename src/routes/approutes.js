const router = require("express").Router();

const usuarioRouter = require("./v1/usuarioRoutes")
const testimonioRouter = require("./v1/testimonioRoutes")

const usuario = require('./user')
const login = require('./login')
const register = require('./register')
const logout = require('./logout')
const token = require('./token');
const authenticate = require("../auth/authenticate");

/* router.use("/v1/usuarios", usuarioRouter) */
router.use("/v1/testimonios", testimonioRouter)

router.use('/v1/usuarios', authenticate, usuario)
router.use('/v1/login', login)
router.use('/v1/register', register)
router.use('/v1/logout', authenticate, logout)
router.use('/v1/token', token)

module.exports = router;