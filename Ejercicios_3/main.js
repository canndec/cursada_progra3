//Ejercicios de strings y arrays en JavaScript
console.log("ejerciciostressssss");
/*1. Calcular el área de un rectángulo
Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() .
La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return .*/
// Longitud = ancho x alto
function calcularAreaRectangulo(ancho,alto){
    return ancho * alto;
}
//console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15

/* 2. Contar palabras en una cadena
Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.*/
function contarPalabras(string){
    let palabraSeparada = string.split(" ");
    return palabraSeparada.length;
}
//console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5

/*3. Contar vocales en una cadena
Escribe una función que reciba una cadena y cuente el número de vocales.*/
function contarVocales(string){
    return string.match(/[aeiou]/gi).length;
}
//console.log(contarVocales("JavaScript")); // Resultado: 3

/*4. Encontrar el palíndromo
Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.*/
// Ejemplos, neuquen, reconocer, rallar
function esPalindromo(string){
    let reverseString = "";
    for(let i = string.length - 1; i >= 0;i--){
        reverseString += string[i];
    }//reverse
    return string === reverseString;
}
//console.log(esPalindromo("neuquen")); // true

/*5. Crear un programa para convertir la edad de un perro a años humanos
Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.*/


function edadCanina(){
    let edadPerro = prompt("ingrese la edad del perro");
    let calculo = edadPerro * 7;
    console.log(`Tu perro tiene ${calculo} años humanos`);
}
//edadCanina();
//edadCanina(7); // Tu perro tiene 49 años humanos

/*6. Convertir la primera letra de cada palabra en mayúscula
Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.*/
function capitalizarPalabras(string){
    let palabras = string.split(" "); //por palabra
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");
}
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"

/*7. Generar los primeros N números de la sucesión de Fibonacci
Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.*/
//console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]
function fibonacci(numero){
    //if (numero === 0) return [0];  
    //if (numero === 1) return [0, 1];

    let array = fibonacci(numero - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;

}



//8. Lista de Productos
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
productos.forEach(producto => {console.log(`producto: ${producto.nombre}, precio: $${producto.precio}`)});

// 2. Usando map: Crear un array con solo los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
let produStockMayor20 = productos.filter(producto => producto.stock > 20);
console.log(produStockMayor20);

// 4. Usando find: Encontrar el producto con id 3
const prodId3 = productos.find(producto => producto.id === 3);
console.log(prodId3);

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)

let totalInventario = productos.reduce((acumulador, productos) =>  acumulador +(productos.precio * productos.stock),0);
console.log(totalInventario);


//9. Estudiantes y Calificaciones
const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'Maria', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];
// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
estudiantes.forEach(estudiante => console.log(`Nombre: ${estudiante.nombre}, edad: ${estudiante.edad}`));

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
let total = estudiantes.map(estudiante => ({
    nombre: estudiante.nombre,
    promedio: estudiante.calificaciones.reduce((notas,numero) => notas + numero ) / estudiante.calificaciones.length})); 

console.table(total);


// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
// use la variable que mapie, accedi al promedio y filtre
let promedioMayor7 = total.filter(e => e.promedio > 7.5);

//console.table(promedioMayor7);

// 4. Usando find: Encontrar estudiante llamado 'María'
let indic = estudiantes.findIndex(e => e.nombre == "Maria");
console.log(estudiantes[indic]);

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
let edadPromedio = estudiantes.reduce((suma,estudiante) => suma + estudiante.edad,0) / estudiantes.length ;
console.log(edadPromedio);

//10. Películas
const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];
// 1. Usando forEach: Mostrar título y año de cada película
peliculas.forEach(p => console.log(`titulo: ${p.titulo}, año: ${p.año}`));

// 2. Usando map: Crear array de títulos en mayúsculas
let tituloMayusculas = peliculas.map(p => p.titulo.toUpperCase());
console.log(tituloMayusculas);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
let rating = peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
console.log(rating);

// 4. Usando find: Encontrar película estrenada en 2014
let estreno2014 = peliculas.find(p => p.año === 2014);
console.log(estreno2014);

// 5. Usando reduce: Calcular la duración total de todas las películas
let duracionTotal = peliculas.reduce((suma,p) => suma + p.duracion,0);
console.log(duracionTotal);
