// ## importaciones
import express from "express"; //framework express
const app = express();
import environments from "./src/api/config/environments.js"; //port
import connection from "./src/api/database/db.js"; //conect a bdd
const PORT = environments.port;
import cors from  "cors"; //modulo cors


// ## middlwares
app.use(cors());
app.use(express.json()); //para parsear json en el body

// ## endpoints

// get -> trae todo
app.get("/productos", async (req, res) => {
    try{
        const sql =  `SELECT * FROM productos`;
        const [rows] = await connection.query(sql) 
        console.log(rows)

        res.status(200).json({
            payload: rows,
            messange: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });


    }catch(error){
        console.error(error )
        res.status(500).json({
            message: "error interno al obtener productos"
        });

    }
});

// get product by id
app.get("/productos/:id", async (req,res) => {
    try{
        let { id } = req.params; //el valor numerico 
        
        let sql = `SELECT * from productos where id = ?`; // ? placeholder
        const [rows] = await  connection.query(sql, [id]); //solo esto

        res.status(200).json({
            payload: rows
        });



    } catch(error){
        console.error("error obteniendo el producto con id", error.message);
        res.status(500).json({
            error: "error interno al obtener el producto con id"
        });
    }
});





app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
//npm run dev