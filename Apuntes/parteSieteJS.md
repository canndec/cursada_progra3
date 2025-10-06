# Funciones de orden superios - High Order Functions

Una funcion de orden superior es una funcioin que puede opera sobre otras funciones, como parametro o retornandola

1. recibir una o mas funciones como argumento(s)
2. devolver una funcion como resultado

`Callback`
funciones que se pasa como argumento a otra funcion y que se ejecuta despies de que algo haya ocurrido
- Se usa principalmente para
* ejecutar codigo despues de una tarea
* manejar tareas asincronas(leer archivos o pedir datos a un servidor)
* hacer le codifo mas flexible y utiizable

async 
await : no se ejecute lo siguiente hasta qye se temprine el await

rest operator -> agrupar lo que sobra.
const nums = [1, 2, 3, 4];
const [primero, ...resto] = nums;

spread operator -> expandir elementos
const persona = { nombre: "Kevin", edad: 23 };
const copia = { ...persona, ciudad: "Buenos Aires" }