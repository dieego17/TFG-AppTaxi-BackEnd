const Testimonio = require('../database/models/Testimonio')
const Cliente = require('../database/models/Cliente')
const Usuario = require('../database/models/Usuario')

const { Op } = require("sequelize");

// GET para obtener todos los testimonios
const getAllTestimonio = async () =>{
    const Testimonios = await Testimonio.findAll({
        include:[{
            model: Cliente,
            include:[{
                model: Usuario,
                attributes: ['nombre', 'apellidos']
            }]
        }
        ],
        attributes: ['mensaje_testimonio', "clasificacion_testimonio", "id_testimonio"],
        where:{
            clasificacion_testimonio: {
                [Op.gte]: 4
            
            }
        },
        limit: 6
    })
    return Testimonios
}

// POST para crear un testimonio
const createTestimonio = async (mensaje_testimonio, clasificacion_testimonio, id_cliente) => {
    const newTestimonio = await Testimonio.create({
        mensaje_testimonio: mensaje_testimonio,
        clasificacion_testimonio: clasificacion_testimonio,
        id_cliente: id_cliente,
        fecha_testimonio: new Date()
    })
    return newTestimonio
}


module.exports = {
    getAllTestimonio,
    createTestimonio
}