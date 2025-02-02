const usuarioService = require('../services/usuarioService')


const findClientes = async (req, res) =>{
<<<<<<< HEAD
    const clientes = await usuarioService.findClientes(req.params.idTaxista)
    res.json(clientes)
}


module.exports = {

    findClientes
=======
    const { idTaxista } = req.params
    const clientes = await usuarioService.findClientes(idTaxista)
    res.json(clientes)
}

const clienteFactura = async (req, res) =>{
    const clienteFactura = await usuarioService.clienteFactura(req.params.idUsuario)
    res.json(clienteFactura)
}

const getAllTaxistas = async (req, res) =>{
    const AllTaxistas = await usuarioService.getAllTaxistas()
    res.json(AllTaxistas)
}


const getOneTaxista = async (req, res) => {
    const { id } = req.params;
    const taxista = await usuarioService.getOneTaxista(id);
    res.json(taxista);
}

const cambiarContraseña = async (req, res) => {
    const { correo_electronico, contraseña } = req.body;

    console.log(correo_electronico, contraseña);

    try {
        const result = await usuarioService.cambiarContraseña(correo_electronico, contraseña);
        res.json(result);
    } catch (error) {
        console.error("Error al cambiar la contraseña:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}


module.exports = {
    findClientes,
    clienteFactura,
    getAllTaxistas,
    getOneTaxista,
    cambiarContraseña
>>>>>>> baef6a1 (correcting errors)
}