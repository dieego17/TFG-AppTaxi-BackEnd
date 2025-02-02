const registerService = require('../services/registerService');


const createTaxista = async (req, res) => {
    const { nombre, apellidos, telefono, correo_electronico, contraseña, DNI, direccion_usuario, numero_cuenta, vehiculo } = req.body;
    const newTaxista = await registerService.createTaxista(nombre, apellidos, telefono, correo_electronico, contraseña, DNI, direccion_usuario, numero_cuenta, vehiculo);
    res.json(newTaxista);
}

const createCliente = async (req, res) => {
    const { nombre, apellidos, telefono, correo_electronico, contraseña, DNI, direccion_usuario, metodo_pago } = req.body;
    const newCliente = await registerService.createCliente(nombre, apellidos, telefono, correo_electronico, contraseña, DNI, direccion_usuario, metodo_pago);
    res.json(newCliente);
}


module.exports = {
    createTaxista,
    createCliente
};
