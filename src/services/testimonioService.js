const Testimonio = require('../database/models/Testimonio')
const Cliente = require('../database/models/Cliente')
const Usuario = require('../database/models/Usuario')

const { Op } = require("sequelize");

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
        attributes: ['mensaje_testimonio', "clasificacion_testimonio"],
        where:{
            clasificacion_testimonio: {
                [Op.gte]: 4
            
            }
        },
        limit: 6
    })
    return Testimonios
}


module.exports = {
    getAllTestimonio
}