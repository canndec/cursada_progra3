// ## IMPORTACIONES
import express from "express"; //framework express
const app = express();

import environments from "./src/api/config/environments.js"; //port
const PORT = environments.port;
import cors from  "cors"; //modulo cors

import { loggerUrl} from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js";

import  {join, __dirname} from "./src/api/utils/index.js"
import connection from "./src/api/database/db.js";

// ## MIDDLEWARES   
app.use(cors());
app.use(express.json()); //para parsear json en el body
app.use(loggerUrl);
app.use(express.static(join(__dirname, "src/public"))); //servir archivos staticos desde public
//probar imagen

// ## CONFIG
// ejs como motor de plantillas
app.set("view engine", "ejs");
app.set("views", join(__dirname, "src/views"));


// ## RUTAS         
app.use("/api/productos", productRoutes); //productRouter se encarga de manejar peticiones

//falta modularizar
app.get("/dashboard", async (req,res) => {
    try{
        const [rows] = await connection.query(`SELECT * FROM productos`)
        console.log(rows);
        res.render("index", {
            title: "Dashboard",
            about: "Listado de productos" ,
            productos: rows
        });

    }catch(error){
        console.error(error);
    }
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
//npm run dev