const testimonioService = require('../services/testimonioService')


const getAllTestimonios = async (req, res) =>{
    const getAllTestimonios = await testimonioService.getAllTestimonio()
    res.json(getAllTestimonios)
}

module.exports = {
    getAllTestimonios
}