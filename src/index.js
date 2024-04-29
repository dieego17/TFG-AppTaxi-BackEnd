const express = require("express");
const app = express();
const bodyParse = require("body-parser")

const sequelize = require("./database/db");

app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT} 😎`)

    sequelize
        .sync({ force: false })
        .then(() => console.log("Conexion a la base de datos almacenes conectada con exito 👌👌"))
        .then(() => console.log("Tablas sincronizadas"))
        .catch((error) =>console.log("Error: "+error+"✖✖"))

})