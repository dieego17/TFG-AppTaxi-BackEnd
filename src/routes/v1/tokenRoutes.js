const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ message: "Soy token" });
});


module.exports = router;