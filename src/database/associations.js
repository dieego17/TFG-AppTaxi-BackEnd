const Admin = require('./models/Admin');
const Usuario = require('./models/Usuario');
const Cliente = require('./models/Cliente');
const Ganancia = require('./models/Ganancia');
const Gasto = require('./models/Gasto');
const Factura = require('./models/Factura');
const Viaje = require('./models/Viaje');
const Notificacion = require('./models/Notificacion');
const Testimonio = require('./models/Testimonio');
const Reserva = require('./models/Reserva');


// Asociación de Usuario con Admin
Usuario.hasOne(Admin, { foreignKey: 'id_usuario' });
Admin.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Asociación de Usuario con Cliente
Usuario.hasOne(Cliente, { foreignKey: 'id_usuario' });
Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Asociación de Admin con Ganancia
Admin.hasMany(Ganancia, { foreignKey: 'id_admin' });
Ganancia.belongsTo(Admin, { foreignKey: 'id_admin' });

// Asociación de Admin con Gasto
Admin.hasMany(Gasto, { foreignKey: 'id_admin' });
Gasto.belongsTo(Admin, { foreignKey: 'id_admin' });

// Asociación de Cliente con Testimonio
Cliente.hasMany(Testimonio, { foreignKey: 'id_cliente' });
Testimonio.belongsTo(Cliente, { foreignKey: 'id_cliente' });


// Asociación de Cliente con Reserva
Cliente.hasMany(Reserva, { foreignKey: 'id_cliente' });
Reserva.belongsTo(Cliente, { foreignKey: 'id_cliente' });

// Asociación de Viaje con Reserva
Viaje.hasMany(Reserva, { foreignKey: 'id_viaje' });
Reserva.belongsTo(Viaje, { foreignKey: 'id_viaje' });

// Asociación de Cliente con Notificacion
Cliente.hasMany(Notificacion, { foreignKey: 'id_cliente' });
Notificacion.belongsTo(Cliente, { foreignKey: 'id_cliente' });

// Asociación de Reserva con Notificacion
Reserva.hasOne(Notificacion, { foreignKey: 'id_reserva' });
Notificacion.belongsTo(Reserva, { foreignKey: 'id_reserva' });

// Asociación de Admin con Viaje
Admin.hasMany(Viaje, { foreignKey: 'id_admin' });
Viaje.belongsTo(Admin, { foreignKey: 'id_admin' });

// Asociación de Viaje con Factura
Viaje.hasOne(Factura, { foreignKey: 'id_viaje' });
Factura.belongsTo(Viaje, { foreignKey: 'id_viaje' });