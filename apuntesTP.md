## ANOTACIONES GENERALES HELP

Guia para resolver el backend
1. CRUD minimo para que funcione cuanto antes -> 1 endpoint, 2 vista
2. Optimizaciones para ese CRUD
3. Aplicar el modelo MVC
4. Servir archivos estaticos y plantillas con EJS
5. EXTRAS del TP

**Proyecto frontend**
- 1er parcial consumiento propia API Rest
- usuarios compran dos tipos de producto
- al finalizar compra -> un boton que diga "hacer compra" o "imprimir ticket"
* imprimir un ticket con la libreria Js PDF
* registrar una venta (POST  para registrar un venta)

*CLIENTE*
- Pantalla de bienvenida -> insertar un nombre y guardarlo en la sesion
- Pantalla productos: 
* visualizar tarjetas de productos con sus datos, por peticion fetch a la API Rest
- Pantalla carrito: listado de productos, agregar o quitar distintas cantidades
- Pantalla ticket: confirmado el carrito
* ticket en pdf con js pdf
* se produce un POST a la tabla ventas (hora, cantidad de productos, precio total,etc)

**Proyecto backend**
- API Rest conectada a la bbdd que  devuelve los datos
- nuevas vistas HTML -> el propio servidos las genera, para gestionar productos y  usuarios

*SERVIDOR*
usuario admin
- Pantalla login: permite ingresar correo y psw

- Pantalla dashboard que posee las siguientes vistas asi como el nav para redirigir a las pantallas de alta, baja y modificacion de productos y usuarios
* Listado de productos : GET
* Pantalla para obtener productos/usuarios por su id : GET by id
* Pantalla alta producto para cargar un nuevo producto, formularios que permiten cargar datos e imagen en url : POST
* Recicla el form de get by id -> Pantalla modificar producto para hacerlo a partir de su ID : PUT
* Recicla el gom de get by id -> Pantalla para eliminar producto : DELETE


#### 1. [Introductorio / Playlist de Programacion web de todocode](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV&index=3)
    - Arquitectura cliente-servidor
    - Protocolo HTTP -> Requests y Responses
    - Que es JSON
    - Que son las APIs

#### 2. [Avanzado / Clase completa sobre protocolo HTTP y arquitectura cliente/servidor](https://www.youtube.com/watch?v=l6oF_RpBf64)






## BACK
*1.1/ terminal gitbash*
- npm init -y -> (crea) package.json
index.js
- npm install express
- touch .gitignore -> node_modules

*1.2/ setupe e instalacion*
instalar dependencias - se muestran en package.json
`express` . framework web
`nodemon` . herramienta que reinicia autom la aplicacion Node.js cuando hay  cambios en los archivos
`dotenv` .  modulo de carga variables de entorno desde un archivo ".env" entorno de ejecucon Node.js
`mysql2` .  herramienta ´para conectarnos a nuestra bbdd mysql

- npm install nodemon dotenv mysql2
- npm install cors ¿?

*1.3/ script personalizado y sintaxis ESM*
agregamos type:
"module" en el `package.json - scripts `
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
*--------------------------------------*
*importaciones*
import express from "express"; importa el framework express
const app = express();
import environments from "...environments"
import connection from "./src/api/database/db.js" importamos la conexion de la bdd
const PORT = environments.port;

import cors from "cors"; modulo de CORS 



*Middlewares*
app.use(cors()); middleware cors basico que permnite todas las solicitudes

app.use(express.json()); middleware para parsear JSON en el body


*Endpoints*

app.get("/dashboard", (req, res) => {
    // Devolvemos una respuesta en texto plano desde la url /dashboard
    // Posteriormente desde esta url devolveremos una pagina HTML de la carpeta views
    res.send("Hola desde la raiz del TP Integrador");
});

- get products -> traer todos los productos
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

*  TO DO, Optimizacion sacando SELECT * y eligiendo solo los campos que queremos mostrar







// get product by id -> consultar producto por su id
app.get("/products/:id", async (req, res) => {
    try {
        let {id} =req.params; obtener valor numeros despues de productos/:id

- Los ? representan los placeholders, se usan por temas de seguridad para prevenir inyecciones SQL
        let sql = SELECT * FROM products where id = ?;
        const [rows] = await connection.query
        (sql, [id]);
        
        res.status(200).json({
            playload: rows;
        });

    }catch (error) {
        console.error("Error obteniendo producto con id", error.message);

        res.status(500).json({
            error: "Error interno al obtener un producto con id"
        })
    }
})

// Crear producto
app.post("/products", async (req, res) => {
    try {
        

    } catch(error) {
        console.error("Error interno del servidor");

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        });
    }
});



app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto ${PORT})
})


dev para ejecutar
npm install -> node_modules
.env
npm run dev -> servidor corriendo3000

*3/ consumiendo nuestra API rest*

*3.1/ instalar cors en nuestro servidor apra permitir a nuestra API ser consumida desde*


# FRONT
touch index.html
npm i cors

mkdir css js
touch style.css/main.js

levantar servidor en el back
main getElementById()

*¿Qué es FormData?*
Interfaz nativa de js que permite crear un conjuto de pares clave-valor que representan los campos de un formulario HTML y sus valores
Utilizada para capturar y enviar datos de formularios mediante metodos como fetch o HTMLHttpReques

**archivo - index.html**
let url = "http://localhost:3000";
    async function obtenerProductos() {
        try {
            let response = await fetch(`${url}/products`);

            console.log(`Solicitud fetch GET a ${url}/products`);

            let data = await response.json();

            console.log(data);
            let productos = data.payload;
            console.log(productos);

            mostrarProductos(productos);

        } catch (error) {
            console.error("Error obteniendo productos: ", error);
        }
    }


async function obtenerProducts(){
    try{
        let response = await fetch(`${url}/producto`);
        console.log(solicitud fetch get a ${url}/productos)
        let data await response.json();
        let productos = data.payload; //convension info util
        console.log(productos);
        console.table(prouctos)

        mostrarProductos(productos);

    }catch(e){
        console.error("error");
    }
}

function mostrarProductos(array){
    let htmlProductos = "";
    array.forEach(prod =>{
        htmlProductos += "";
    });
    contenedor.innerHTML = htmlProductos
}

function init(){
    obtenerProductos()
}
**archivo crear.html**
- formulario para ingreso de datos
let altaProducts_container = document.getElementById("altaProducts-container");

        altaProducts_container.addEventListener("submit", (event) => {

            event.preventDefault(); // Evitamos el envio por defecto del formulario

            console.log(event.target);
            /* event.target devuelve el formulario HTML que activo el evento

            <form id="altaProducts-container">

                <label for="nameProd">Nombre</label>
                <input type="text" name="name" id="nameProd" required="">

                <label for="imageProd">Imagen</label>
                <input type="text" name="image" id="imageProd" required="">

                <label for="priceProd">Precio</label>
                <input type="number" name="price" id="priceProd" required="">

                <label for="categoryProd">Categoria</label>
                <select name="category" id="categoryProd" required="">
                    <option value="food">comida</option>
                    <option value="drink">bebida</option>
                </select>

                <input type="submit" value="Crear producto">
            </form>
            */

            // Guardamos toda la informacion de nuestro formulario en el objeto nativo FormData
            let formData = new FormData(event.target);

            // Esto no deberia consologuearse en producccion 
            console.log(formData); // Esto no se ve en navegadores basados en Chromium

            // Transformamos la informacion del objeto FormData en un objeto JavaScript normal
            let data = Object.fromEntries(formData.entries());

            console.log(data);
        });

**archivo consultar.html**
- seria como traer la info adquirida del formulario
let listaProductos = document.getElementById("lista-productos");
        let getProductForm = document.getElementById("getProduct-form");
        let url = "http://localhost:3000";


        getProductForm.addEventListener("submit", async (event) => {
            
            event.preventDefault(); // Prevenimos el envio por defecto del formulario

            // Tenemos que obtener los datos del formulario, por tanto, vamos a crear un objeto FormData a partir de los datos del formulario
            let formData = new FormData(event.target); //Creamos un nuevo objeto FormData a partir de los datos del formulario

            console.log(formData); // FormData { idProd → "2" }
            // Ojo, esto no se muestra en navegadores basados en Chromium

            // Transformamos a objetos JS los valores de FormData
            let data = Object.fromEntries(formData.entries());
            console.log(data); // { idProd: '2' }

            let idProd = data.idProd; // Ahora ya tenemos guardado en una variable el valor del campo del formulario
            console.log(idProd);

            console.log(`Realizando una peticion GET a la url ${url}/products/${idProd}`);
            
            let response = await fetch(`${url}/products/${idProd}`);

            let datos = await response.json();

             // Extraemos de la respuesta payload, el primer resultado que contiene el objeto que consultamos
            let producto = datos.payload[0];
            console.log(producto);

            let htmlProducto = `
                <li class="li-producto">
                        <img class="producto-img" src="${producto.image}" alt="${producto.name}">
                        <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: ${producto.price}</strong></p></li>
`;
listaProductos.innerHTML = htmlProducto;