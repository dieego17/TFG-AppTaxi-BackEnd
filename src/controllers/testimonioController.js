const testimonioService = require('../services/testimonioService')

// GET para obtener todos los testimonios
const getAllTestimonios = async (req, res) =>{
    const getAllTestimonios = await testimonioService.getAllTestimonio()
    res.json(getAllTestimonios)
}

// POST para crear un testimonio
const createTestimonio = async (req, res) => {
    const { id_cliente } = req.params
    const { mensaje_testimonio, clasificacion_testimonio } = req.body
    const newTestimonio = await testimonioService.createTestimonio(mensaje_testimonio, clasificacion_testimonio, id_cliente)
    res.json(newTestimonio)
}

module.exports = {
    getAllTestimonios,
    createTestimonio
}