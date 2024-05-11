const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();


router.get("/", (req, res) => {
    res.send(200).json(jsonResponse(200,  req.usuario))
});

module.exports = router;