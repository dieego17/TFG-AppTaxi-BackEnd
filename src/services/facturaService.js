const Factura = require('../database/models/Factura')
const Viaje = require('../database/models/Viaje')
const Reserva = require('../database/models/Reserva')
const Cliente = require('../database/models/Cliente')
const Usuario = require('../database/models/Usuario')

const getAllFacturas = async () => {
    const facturas = await Factura.findAll({
        attributes: ['id_factura', 'fecha_factura'],
        include: [{
            model: Viaje,
            attributes: ['origen_viaje', 'destino_viaje', 'fecha_viaje', 'precioTotal_viaje'],
            include: [{
                model: Reserva,
                attributes: [],
                include: [{
                    model: Cliente,
                    attributes: [],
                    include: [{
                        model: Usuario,
                        attributes: ['nombre', 'apellidos', 'telefono']
                    }]
                }]
            }]
        }]
    })
    return facturas
}

module.exports = {
    getAllFacturas
}
