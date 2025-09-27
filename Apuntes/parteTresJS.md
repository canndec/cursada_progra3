## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

# Scope o Ambito
- las variables y funciones son accesibles y pueden ser referenciadas

# Global Scope o Ambito Global
- las varibales declaradas fuera de cualq funcion o bloque de cod. tiene alcance global- accesibles de cualq parte del codigo
* var globarVar = ...

# Local Scope o Ambito local-function
- variables declaradas dentro de una funcion solo accesibles ahi, de manera local

# Block Scope o Ambito de bloque
- (a partir de ES6) variables declaradas con let y const tienen alcance de * bloque *, solo accesible dentro del bloque qiese declararon {}

# Scope Chain o Cadena de Ambito 
- JS busca en la "cadena de ambito", comenzando por el ambito mas interno y moviendose hacia los ambitos mas externos hasta encontrar la variable o llegar al ambito global

/ 
## Function Scope (Ambito de funcion) - no estan limitadas por bloques
# VS 
## Block Scope (Ambito de bloque) - so estan limitadas por bloques

- FS: las variables declaradas con var tienen amb de funcion. si se declaran dentro de la funcion, no son accesibles fuera
- BS: las variables declaradas con let y const estan limitadas dentro de donde se declaren

# Hosting (Elevacion)
- Variables con var: Se elevan y se inicializan con undefined
- Variables con let y const: Se elevan pero no se inicializan, lo que lleva a un error si se accede antes de la declaracion.  // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization

# Diferencias (var, let, const)
# var:
- se declara dentro de la funcion actual. se puede redeclarar y reasignar
- de ambiuto global o de funcion
- tiene elevacion a nivel de funcion. Se puede utilizar antes de la declaracion
- no se usa

# let: 
- tiene ambito de bloque, solo disponible ahi
- se puede redeclarar pero NO reasignar
- tiene elevacion a nivel de bloque. No es accesible antes de la declaracion
- + coherente con la programacion funcional y estados inmutables 

# const:
- tiene ambito de bloque
- NO se puede redeclarar ni reasignar
- tiene elevacion a nivel de bloque. No es accesible antes de la declaracion

## Tanto let como const NO permite la elevacion, ademas const asegura que el valor de la variable permanece inmutable mientras que let permite la reasignacion.

## -------------
Buenas practicas
## -------------

- usar const para variables de solo lectura, como constantes u objetos inmutables.
- usar let para variables que puedan cambiar con el tiempo
- evitar usar var debido a  su ambito global o de funcion, que puede dar lugar a conflictos y bugs

## Funciones
- modularidad y reutilizacion de codigo

1. Funcion declarada / Named function o Basic function
- Es la declaracion basica de JavaScript, usa la keyword function
- Se recomienda para funciones con nombre o cuando se necesite hoisting.
- Las funciones declaradas con la keyword function se puede elevar a la parte superior de su ambito, esto permite llamar a la funcion antes de ser declarada


2. Funcion expresada / Function expression
- Es la funcion que esta dentro de una variable
- Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion * const

3. Funcion anonima / Anonymous function
- No tiene nombre y se usan como callbacks generalmente
* setTimeout(function() {
    console.log("Hola mundo desde una funcion anonima");
}, 1000);

4. Funcion flecha / Arrow function
- Especialmente util para escribir funciones de una sola linea
* const sumar2 = (a, b) => a + b;
- si la funcion tiene un solo parametro, las () son opcionales
- si la funcion solo devuelve un valor, no es necesario usar la palabra return ni las {}


5. Funcion de metodos / Method function
- Son las funciones definidas dentro de un objeto o clase
* const persona = {
    nombre: "Valeria",
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

6. IIFE - Immediately Invoked Function Expression
Las IIFE son funciones que se ejecutan inmediatamente despues de haberse definido
* (function() {
    console.log("Hola mundo desde una IIFE");
})();


