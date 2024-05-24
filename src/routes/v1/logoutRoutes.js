const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ message: "Soy logOut" });
});

module.exports = router;