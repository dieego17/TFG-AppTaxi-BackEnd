const perdidaService = require('../services/perdidaService');

const getAllPerdidas = async (req, res) => {
    const perdidas = await perdidaService.getAllPerdidas(req.params.id_taxista);
    res.json(perdidas);
}

const createPerdida = async (req, res) => {
<<<<<<< HEAD
    const perdida = await perdidaService.createPerdida(req.body.id_taxista, req.body.descripcion_gasto, req.body.gasto_total);
=======
    const perdida = await perdidaService.createPerdida(req.body.id_taxista, req.body.descripcion_gasto, req.body.gasto_total, req.body.fecha_gasto);
    res.json(perdida);
}

const deletePerdida = async (req, res) => {
    const perdida = await perdidaService.deletePerdida(req.params.id_perdida);
>>>>>>> baef6a1 (correcting errors)
    res.json(perdida);
}

module.exports = {
    getAllPerdidas,
<<<<<<< HEAD
    createPerdida
=======
    createPerdida,
    deletePerdida
>>>>>>> baef6a1 (correcting errors)
};
