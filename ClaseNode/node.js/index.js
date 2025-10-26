//importamos el modulo nativo os, para interactuare con el so
const os = require("os");

//accedemos a funcionaldiades del modulo
let memoriaLibre = os.freemem();
let tipoSistema = os.type();

console.log('Memoria libre:', memoriaLibre);
console.log('Tipo de sistema operativo:', tipoSistema)

//importamos el modulo fs
const fs = require("fs");
fs.readFile("saludo.txt", "utf8", (err,data) => {
    if(err){
        console.error("ocurrio un error:", err);
        return;
    }
    console.log("contenido del archivo:", data)
});

//importamos elmodulo path
//const path = require("path");

//const saludar = require("saludar.js");
//console.log(saludar("candela"));

/////servidor basico
//importamos modulo
const http = require("http");
const servidor = http.createServer((req,res) => {
    //configuramos la respuesta
    res.statusCode = 200; //cosdigo 200 indica q la peticion fue exitosa
    res.setHeader("Content-Type","text/plain"); //indicamos q respondemos con texto plano
    res._construct("hola mundo desde node.js"); //mensaje q enviamos al cliente

});

//definimos el puerto y  arrancamos el servidor
const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http;//localhost:${puerto}`);
});







