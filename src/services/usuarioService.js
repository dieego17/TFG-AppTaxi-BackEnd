const Usuario = require('../database/models/Usuario')
const Cliente = require('../database/models/Cliente')
const Taxista = require('../database/models/Taxista')
const Reserva = require('../database/models/Reserva')
const Viaje = require('../database/models/Viaje')

const findClientes = async (idTaxista) =>{
  const clientes = await Cliente.findAll({
    attributes: ['id_usuario', 'metodo_pago'],
    include: [
      {
        model: Usuario,
        attributes: ['nombre', 'apellidos', 'correo_electronico', 'telefono', 'direccion_usuario'],
        required: true, // INNER JOIN
      },
      {
        model: Reserva,
        attributes: [],
        required: true, // INNER JOIN
        include: [
          {
            model: Viaje,
            attributes: ['origen_viaje', 'destino_viaje', 'fecha_viaje', 'hora_viaje', 'precioTotal_viaje', 'estado_viaje'],
            where: { id_taxista: idTaxista },
            required: true, // INNER JOIN
          },
        ],
      },
    ],
  });

  return clientes
}

const clienteFactura = async (idUsuario) => {
  const ClienteFactura = await Usuario.findAll({
    attributes:['nombre', 'apellidos', 'correo_electronico'],
    include:[
      {
        model: Cliente,
        atributtes:[],
        include:[{
          model: Reserva,
          attributes:[],
          include:[{
            model: Viaje,
            attributes:['origen_viaje', 'destino_viaje', 'fecha_viaje'],
            where:{
              factura_viaje: 'Si'
            },
            include:[{
              model: Taxista,
              atributtes:[],
              where:{
                id_usuario: idUsuario
              }
            }]
          }]
        }]
      },
    ]
  })

  return ClienteFactura
}
    

module.exports = {
    findClientes,
    clienteFactura
}