function getToken(headers) {
// Obtener el token de autorización de las cabeceras
  if(headers && headers.authorization){
    // Separar el tipo de autorización y el token
    const parted = headers.authorization.split(' ')
    // Verificar si el token es del tipo Bearer
    if(parted.length === 2){
    // Retornar el token
      return parted[1]
    }else{
      return null
    }
// Retornar nulo si el token no es del tipo Bearer
  }else{
    return null
  }
}

module.exports = getToken;