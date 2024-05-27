const Usuario = require('../database/models/Usuario');
const Taxista = require('../database/models/Taxista');
const Cliente = require('../database/models/Cliente');
const bcrypt = require('bcryptjs');

function generarLicencia() {
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function letraAleatoria() {
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letras.charAt(numeroAleatorio(0, letras.length - 1));
    }

    let licencia = '';
    for (let i = 0; i < 3; i++) {
        licencia += letraAleatoria();
    }

    for (let i = 0; i < 3; i++) {
        licencia += numeroAleatorio(0, 9);
    }

    return licencia;
}

const createTaxista = async (nombre, apellidos, telefono, correo_electronico, contraseña, DNI, direccion_usuario, numero_cuenta, vehiculo) => {
    const usuario = await Usuario.findOne({ where: { correo_electronico: correo_electronico } });

    if (usuario) {
        console.log('El correo electrónico ya está registrado:', usuario);
        return { error: 'El correo electrónico ya está registrado' };
    }

    const num_licencia = generarLicencia();
    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

    console.log('Generando licencia:', num_licencia);

    const newUsuario = await Usuario.create({
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        direccion_usuario: direccion_usuario,
        correo_electronico: correo_electronico,
        contraseña: contraseñaEncriptada,
        rol: 'admin',
        DNI: DNI
    });

    console.log('Usuario creado:', newUsuario);
    console.log(newUsuario.id_usuario)

    const newTaxista = await Taxista.create({
        num_licencia: num_licencia,
        numero_cuenta: numero_cuenta,
        vehiculo: vehiculo,
        id_usuario: newUsuario.id_usuario // Utilizando directamente el ID del nuevo usuario
    });

    console.log('Taxista creado:', newTaxista);

    return newTaxista;
}


const createCliente = async (nombre, apellidos, telefono, correo_electronico, contraseña, DNI, direccion_usuario, metodo_pago) => {
    const usuario = await Usuario.findOne({ where: { correo_electronico: correo_electronico } });

    if (usuario) {
        console.log('El correo electrónico ya está registrado:', usuario);
        return { error: 'El correo electrónico ya está registrado' };
    }

    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

    const newUsuario = await Usuario.create({
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        direccion_usuario: direccion_usuario,
        correo_electronico: correo_electronico,
        contraseña: contraseñaEncriptada,
        rol: 'cliente',
        DNI: DNI
    });

    console.log('Usuario creado:', newUsuario);

    const newCliente = await Cliente.create({
        id_usuario: newUsuario.id_usuario,
        metodo_pago: metodo_pago // Utilizando directamente el ID del nuevo usuario
    });

    console.log('Cliente creado:', newCliente);

    return newCliente;
}

module.exports = {
    createTaxista,
    createCliente
};
