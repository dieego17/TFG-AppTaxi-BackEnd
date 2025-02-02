const statusRoutes = require('express').Router();



statusRoutes.get("/", (req, res) => {
    res.json({ status: "El servidor está en funcionamiento" });
    }
);


module.exports = statusRoutes;

