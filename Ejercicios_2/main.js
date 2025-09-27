/*Ejercicios JavaScript IV
Métodos de Strings*/

//1. Convertir a mayúsculas
let texto = "hola mundo";
console.log(texto.toUpperCase());
// Resultado: "HOLA MUNDO"

//2. Reemplazar una palabra
let saludo = "Hola Juan";
console.log(saludo.replace("Juan","Ana"));
// Resultado: "Hola Ana"

//3. Obtener la longitud del string
let palabra = "programación";
console.log(palabra.length);
// Resultado: 12

//4. Extraer una subcadena
let frase = "JavaScript es divertido";
console.log(frase.slice(0,10));
console.log(frase.substring(0,11));
// Resultado: "JavaScript"

//5. Verificar si incluye una palabra
let mensaje = "Aprendiendo JavaScript";
console.log(mensaje.includes("diendo"));
// Resultado: true

//6. Convertir a minúsculas
let titulo = "HOLA MUNDO";
console.log(titulo.toLowerCase());
// Resultado: "hola mundo"

//7. Eliminar espacios al inicio y final
let entrada = " texto limpio ";
console.log(entrada.length)
console.log(entrada.trim());
console.log(entrada.trim().length);
// Resultado: "texto limpio"

//8. Repetir un string
let risa = "ja";
console.log(risa.repeat(3));
// Resultado: "jajaja"

//9. Dividir un string en array
let nombres = "Ana,Juan,Pedro";
console.log(nombres.split(","));
// Resultado: ["Ana", "Juan", "Pedro"]

//10. Obtener el carácter en una posición
let palabra2 = "Hola";
console.log(palabra2.charAt(1));
// Resultado: "o"

//Métodos de Arrays

//11. Agregar elemento al final
let frutas = ["manzana", "pera"];
frutas.push("uva");
console.log(frutas);
// Resultado: ["manzana", "pera", "uva"]

//12. Eliminar el último elemento y devolverlo en una variable
let numeros = [1, 2, 3];
let ultimoNum = numeros.pop();
console.log(ultimoNum);
// Resultado: 3

//13. Agregar al principio
let letras = ["b", "c"];
letras.unshift("a");
console.log(letras)
// Resultado: ["a", "b", "c"]

//14. Eliminar el primer elemento y devolverlo en una variable
let datos = [10, 20, 30];
let primerDato = datos.shift();
console.log(primerDato);
// Resultado: 10

//15. Verificar si incluye un valor
let lista = ["pan", "leche"];
console.log(lista.includes("leche"));
// Resultado: leche devuelve true

//16. Unir elementos del array
let palabras = ["Hola", "mundo"];
console.log(palabras.join());
// Resultado: "Hola mundo"