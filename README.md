# Backend de AppTaxio

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1A71-EuXFqLHHlghGVjcfvvT1QWrPQQMk" alt="AppTaxio Logo" width="200"/>
</div>

Este es el backend de la aplicación AppTaxio, una plataforma diseñada para facilitar la gestión diaria de los taxistas. Este backend está construido con Node.js y utiliza diversas bibliotecas para proporcionar funcionalidades como autenticación, gestión de base de datos, envío de correos electrónicos, etc.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework de Node.js para construir aplicaciones web y API.
- **bcryptjs**: Biblioteca para el hashing de contraseñas.
- **cors**: Middleware para habilitar el acceso a recursos de otros dominios.
- **dotenv**: Biblioteca para cargar variables de entorno desde un archivo .env.
- **jsonwebtoken**: Para la generación y verificación de tokens de autenticación.
- **mysql2**: Cliente MySQL para Node.js.
- **nodemailer**: Para enviar correos electrónicos desde Node.js.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js, compatible con varias bases de datos relacionales.

## Instalación

Siga estos pasos para configurar y ejecutar el backend en su entorno local:

1. Clona este repositorio

   ```bash
   git clone https://github.com/tu-usuario/TFG-AppTaxi-BackEnd.git
   ```

2. Navega al directorio del proyecto

   ```bash
   cd TFG-AppTaxi-BackEnd
   ```

3. Instala las dependencias

   ```bash
   npm install
   ```

4. Configura las variables de entorno

   Crea un archivo `.env` en el directorio raíz y configura las variables de entorno necesarias, como las credenciales de la base de datos y las claves secretas para JWT.

5. Inicia el servidor

   ```bash
   npm run dev
   ```

## Uso

Una vez que el servidor esté en funcionamiento, puedes utilizar las rutas proporcionadas para acceder a diferentes recursos de la API, como autenticación de usuarios, gestión de clientes, generación de facturas, etc.


## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [diegorubio1704.drs@gmail.com](mailto:diegorubio1704.drs@gmail.com).
