const testimonioService = require('../services/testimonioService')

<<<<<<< HEAD

=======
// GET para obtener todos los testimonios
>>>>>>> baef6a1 (correcting errors)
const getAllTestimonios = async (req, res) =>{
    const getAllTestimonios = await testimonioService.getAllTestimonio()
    res.json(getAllTestimonios)
}

<<<<<<< HEAD
module.exports = {
    getAllTestimonios
=======
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
>>>>>>> baef6a1 (correcting errors)
}