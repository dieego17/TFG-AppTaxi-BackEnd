const express = require("express");
const app = express();
const bodyParse = require("body-parser")

app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT} 😎`)

})