// Obtiene la información del usuario que se va a enviar en el token
function getUserInfo(usuario){
    return{
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        correo_electronico: usuario.correo_electronico,
        rol: usuario.rol
    }
}

module.exports = {
    getUserInfo
}