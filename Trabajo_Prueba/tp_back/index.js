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
// logger -> por consola traer cada peticion que se produjo 
app.use((req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next(); //NECESARIO         

});

// ## endpoints

app.get("/dashboard", (req, res) => {
    // Devolvemos una respuesta en texto plano desde la url /dashboard
    // Posteriormente desde esta url devolveremos una pagina HTML de la carpeta views
    res.send("Hola desde la raiz del TP Integrador");
});



// GET -> trae todo
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
        console.error(error)
        res.status(500).json({
            message: "error interno al obtener productos"
        });

    }
});

// get product by id
app.get("/productos/:id", async (req,res) => {
    try{
        let { id } = req.params; //el valor numerico 
        
        let sql = `SELECT * FROM productos where id = ?`; // ? placeholder
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

// POST - crear producto
app.post("/productos", async (req,res) => {
    try{
        const {nombre, categoria, imagen, precio} = req.body;
        console.log(req.body);
        let sql = `INSERT INTO productos (nombre, categoria, imagen, precio) VALUES (?, ?, ?, ?)`;
        let [rows] = await connection.query(sql, [nombre, categoria, imagen, precio]);

        res.status(201).json({
            message: "producto creado con exito"
        });

    }catch (error) {
        console.error("Error interno del servidor", error);
        res.status(500).json({
            message: "error interno del servidor",
            error: error.message
        });
    }
});

// PUT -
app.put("/productos", async (req, res) => {
    try {
        let {id, nombre, categoria, imagen, precio, active} = req.body;
        
        let sql = `
            UPDATE productos
            SET nombre = ?, categoria = ?, imagen = ?, precio = ? 
            WHERE id = ? `;
        
        let [result] = await connection.query(sql, [nombre, categoria, imagen, precio, id]);
        console.log(result);
        
        res.status(200).json({
            message: "Producto actualizado correctamente"
        });
        
        
    } catch (error) {
        console.error("Error al actualizar el producto: ", error);
        
        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
});

// DELETE - eliminar producto
app.delete("/productos/:id", async (req,res) => {
    try{
        let { id } = req.params;
        let sql = "DELETE FROM productos WHERE id = ?";
        //uso de baja logica - update
        let [result] = await connection.query(sql,[id]);
        console.log(result);
        return res.status(200).json({
            message:  `producto con id ${id} eliminado correctamente`
        })

    } catch(error){
        console.log(`error al eliminar el producto con id ${id}`, error);
        res.status(500).json({
            message: `error al eliminar el producto con id ${id}`, error: error.message
        })

    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
//npm run dev