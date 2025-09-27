// Tabla de multiplicar de un número. Pedir por prompt.

let numero = prompt("ingrese un numero para saber su tabla de multiplicar: ");

for(let i = 1; i < 11; i++){
    console.log(numero,"*",i, "=", numero*i);
}