const perdidaService = require('../services/perdidaService');

const getAllPerdidas = async (req, res) => {
    const perdidas = await perdidaService.getAllPerdidas(req.params.id_taxista);
    res.json(perdidas);
}

const createPerdida = async (req, res) => {
    const perdida = await perdidaService.createPerdida(req.body.id_taxista, req.body.descripcion_gasto, req.body.gasto_total);
    res.json(perdida);
}

module.exports = {
    getAllPerdidas,
    createPerdida
};
