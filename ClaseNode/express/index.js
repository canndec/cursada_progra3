//servidor base con express q responde con un hola mundo 
const express = require("express");

//instancia de app de express
const app = express();

//ruta principal  COMPLETAR - COMPARACION CON NODE
app.use("/",(req,res) =>{
    res.send("hola mundo desde express.js")
});
const puerto = 3000;
app.listen(puerto, () => {
    console.log(`servidor de express corriendo en el puerto ${puerto}`)
})