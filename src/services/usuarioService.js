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
            include: [
              {
                model: Taxista,
                attributes: [],
                where: { id_usuario: idTaxista },
                required: true, // INNER JOIN
              },
            ],
          },
        ],
      },
    ],
  });

  return clientes
}
    

module.exports = {
    findClientes
}