const gananciasController = require('../services/gananciasService')


const getAllGanancias = async (req, res) =>{
    const getAllGanancias = await gananciasController.getAllGanancias(req.params.id_taxista)
    res.json(getAllGanancias)
}

const createGanancia = async (req, res) =>{
    const createGanancia = await gananciasController.createGanancia(req.body.id_taxista, req.body.descripcion_ganancia, req.body.ganancia_total, req.body.fecha_ganancia)
    res.json(createGanancia)
}

module.exports = {
    getAllGanancias,
    createGanancia
}