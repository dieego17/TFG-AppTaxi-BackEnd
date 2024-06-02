const Usuario = require('../database/models/Usuario')
const Cliente = require('../database/models/Cliente')
const Taxista = require('../database/models/Taxista')
const Reserva = require('../database/models/Reserva')
const Viaje = require('../database/models/Viaje')
const bcrypt = require('bcrypt')

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

//Funcion para obtener los datos del cliente para la factura
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

//Funcion para obtener todos los taxistas
const getAllTaxistas = async () => {
  const AllTaxistas = await Usuario.findAll({
    attributes: ['id_usuario', 'nombre', 'apellidos'],
    include: [
      {
        model: Taxista,
        attributes: ['num_licencia'],
      },
    ],
    where: {
      rol: 'admin'
    }
  });

  return AllTaxistas;
}


const getOneTaxista = async (id) => {
  const taxista = await Usuario.findOne({
    attributes: ['id_usuario', 'nombre', 'apellidos', 'correo_electronico', 'telefono', 'direccion_usuario', 'DNI'],
    include: [
      {
        model: Taxista,
        attributes: ['num_licencia', 'numero_cuenta'],
      },
    ],
    where: {
      id_usuario: id
    }
  });

  return taxista;
}

const cambiarContraseña = async (correo_electronico, contraseña) => {
  const usuario = await Usuario.findOne({ where: { correo_electronico: correo_electronico } });
  
  if (!usuario) {
    return { error: 'Usuario no encontrado' };
  }
  
  const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

  await Usuario.update({ contraseña: contraseñaEncriptada }, {
    where: {
      correo_electronico: correo_electronico
    }
  });

  return { success: true, message: 'Contraseña cambiada correctamente' };
}

    

module.exports = {
    findClientes,
    clienteFactura,
    getAllTaxistas,
    getOneTaxista,
    cambiarContraseña
}