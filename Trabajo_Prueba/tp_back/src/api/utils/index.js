// trabajar con archivos y rutas del proyecto

//modulos para trabajr con rutas
import { fileURLToPath } from "url"; //convierte la url de file:// a una ruta de sistema de archivos
import {dirname, join} from  "path"; //dirname devuelve del directorio de una ruta y join unifica rutas

//obtener nombre de archivo actual
const __filename = fileURLToPath(import.meta.url);
//obtener el  directorio del archivo actual
const __dirname = join(dirname(__filename), "../../../"); //apunta a raiz del proyecto
/**
 * dirname(__filename) obtiene directorio del archivo actual
 * join(..., "../../../") retrocede 3 niveles en la estructura del directorio , a la raiz 
*/


//esquema
export {
    __dirname,
    join
}
/**
 * import.meta.url : file://ruta/al/archivo.js
 * fileURLToPath: /ruta/al/archivo.js
*/