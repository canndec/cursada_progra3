# BACK
*1.1/ terminal gitbash*
init -y
package.json
index.js
npm install express
touch .gitignore -> node_modules

*1.2/ setupe e instalacion*
instalar dependencias - se muestran en package.json
`express` . framework web
`nodemon` . herramienta que reinicia autom la aplicacion Node.js cuando hay  cambios en los archivos
`dotenv` .  modulo de carga variables de entorno desde un archivo ".env" entorno de ejecucon Node.js
`mysql2` .  herramienta ´para conectarnos a nuestra bbdd mysql

npm install nodemon dotenv mysql2

*1.3/ script personalizado y sintaxis ESM*
agregamos type: "module" en el `package.json`
**"dev": nodemon index.js**

*1.4/ archivo de variables de entorno `.env`*
creamos archivo ".env" y se agrega a .gitignore -> variables locales sensibles como el puerto a la conexion de la bdd
touch .env
    PORT=300
    DB_HOSTO="localhost"
    DB_NAME="tp25_autoservicio"
    DB_USER="root"
    DB_PASSWORD="abc123."

*2 estructura de directorios y conexion a la BBDD*
creamos carpetas y los archivos `src/api/config/environments.js` y `src/api/database/db.js`
mkdir src
mkdir src/api
mkdir src/api/config/
mkdir src/api/database/
touch mkdir src/api/config/environments.js
touch mkdir src/api/database/db.js

**en src/api/config/environments.js**
variables de entorno

import dotenv from "dotenv"; importar modulo fotenv
dotenv.config(); carga las variables de entorno desde el archivo .env

exportar esta informacion del .env
export default {
    port : process.env.PORT || 3500,
    database: { 
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,(accese a la info)
        user: process.env.DB_USER,
        passward: process.env.DB_PASSWORD
    }
}

**en src/api/database/db.js**
import mysql fom "mysql2/promise"; importa el modulo que instalamos previamente

import environments from "../config/environments.js"_; importa el archivo de environments

const {database} = environments;  //datos de environments extraidos como obj

const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user
    password: database.password
});

export default connection;

un pool de conexiones es un conjunto de conexiones activas y reutilizables de la BDD
mantiene abiertas varias

**en un index.js general del back**
*importaciones*
import express from "express"; importa el framework express
import environments from "...environments"
import connection from "./src/api/database/db.js" importamos la conexion de la bdd

const app = express();
const PORT = environments.port;

*Endpoints*
app.get("/products", async (req,res) => {
    try {
        const sql = `SELECT * FROM nombreTabla`; 
        const [rows] = await connection.query(sql);
        console.log(rows);

        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ?"no se encontraron prosuctos":"productos entonctrados"
        })

    }catch (error){
        console.error(error)
        res.status(500).json({
            message: "error interno al obtener productos"
        })
    }
});

app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto ${PORT})
})

dev para ejecutar

*3/*
