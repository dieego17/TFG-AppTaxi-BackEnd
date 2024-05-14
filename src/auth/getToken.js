// Función para extraer el token de autorización de las cabeceras HTTP
function getToken(headers) {
  // Verificar si se proporcionan las cabeceras y si existe la cabecera de autorización
  if (!headers || !headers.authorization) {
      return null; // Si no hay cabecera de autorización, retornar nulo
  }

  // Separar el tipo de autorización y el token
  const parted = headers.authorization.split(' ');

  // Verificar si el token es del tipo Bearer y consta de dos partes
  if (parted.length !== 2 || parted[0].toLowerCase() !== 'bearer') {
      return null; // Si no es del tipo Bearer o no consta de dos partes, retornar nulo
  }

  // Retornar el token
  return parted[1];
}

module.exports = { getToken };
