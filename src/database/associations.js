const Taxista = require('./models/Taxista');
const Usuario = require('./models/Usuario');
const Cliente = require('./models/Cliente');
const Ganancia = require('./models/Ganancia');
const Gasto = require('./models/Gasto');
const Viaje = require('./models/Viaje');
const Testimonio = require('./models/Testimonio');
const Reserva = require('./models/Reserva');


// Asociación de Usuario con Taxista
Usuario.hasOne(Taxista, { foreignKey: 'id_usuario' });
Taxista.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Asociación de Usuario con Cliente
Usuario.hasOne(Cliente, { foreignKey: 'id_usuario' });
Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Asociación de Taxista con Ganancia
Taxista.hasMany(Ganancia, { foreignKey: 'id_taxista' });
Ganancia.belongsTo(Taxista, { foreignKey: 'id_taxista' });

// Asociación de Taxista con Gasto
Taxista.hasMany(Gasto, { foreignKey: 'id_taxista' });
Gasto.belongsTo(Taxista, { foreignKey: 'id_taxista' });

// Asociación de Cliente con Testimonio
Cliente.hasMany(Testimonio, { foreignKey: 'id_cliente' });
Testimonio.belongsTo(Cliente, { foreignKey: 'id_cliente' });

// Asociación de Cliente con Reserva
Cliente.hasMany(Reserva, { foreignKey: 'id_cliente' });
Reserva.belongsTo(Cliente, { foreignKey: 'id_cliente' });

// Asociación de Reserva con Viaje
Reserva.belongsTo(Viaje, { foreignKey: 'id_viaje' });
Viaje.hasOne(Reserva, { foreignKey: 'id_viaje' });

// Asociación de Taxista con Viaje
Taxista.hasMany(Viaje, { foreignKey: 'id_taxista' });
Viaje.belongsTo(Taxista, { foreignKey: 'id_taxista' });