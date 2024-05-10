const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("Hola mundo desde la ruta de usuarios");
});

module.exports = router;