/*1. Mostrar saludo
Descripción: Crear un input para ingresar un nombre | Crear un input para ingresar un edad.
Un botón que al hacer click cree un objeto persona y muestre "Hola, soy... y tengo... años." */
// Resultado
// "Hola, soy Jaimito y tengo 23 años."

//let nombre = prompt("Ingrese su nombre");
//let edad = prompt("Ingrese su edad");

let nombreI = document.getElementById("ingresoNombre");
let edadI = document.getElementById("ingresoEdad");
let punto1 = document.getElementById("botonDiccionario");
let reinicio = document.getElementById("botonReinicio");
punto1.style.color = "black";
punto1.style.background = "pink";
reinicio.style.background = "#b57eda";

/*reinicio.addEventListener("click",function(){
    //volver a funcionar el bucle, input de edad y nombre -> en un programa
    return nombre, edad;
})*/

// nombreI.addEventListener("click",function(){})
punto1.addEventListener("click",function(){
    persona = {
        nombre: nombreI,
        edad: edadI
    }
    punto1.style.borderColor = "rgba(136, 38, 30, 0.27)";
    console.log(`Hola, soy ${persona.nombre} y tengo ${persona.edad}`);
    //crear un objeto con los inputa
});
/*2. Crear un objeto Auto y mostrarlo
Descripción: Crear un objeto Auto con las siguientes propiedades: |color | marca | modelo
1. Ingresar los datos con inputs y un botón.
2. Mostrar los datos en un <p><strong>...</strong></p> al hacer click.*/

/* ANOTACIONES
hacer 3 inputs(para tipear color, marca, modelo)
esos datos que se ingresan en los input, guardarlos en una variable
con esas variables crear un objeto
- los datos hay que mostrarlos en un parrafo,strong, cuando se hag click(en algun boton)
*/ 

let colorAuto = document.getElementById("ingresoColor"); //input
let marcaAuto = document.getElementById("ingresoMarca"); //input
let modeloAuto = document.getElementById("ingresoModelo"); //input
let datos = document.getElementById("botonDatos"); //para mostrar los datos(en un porrafo)
let parrafo = document.getElementById("parrafoDatos"); //parrafo a editar para poner datos

datos.addEventListener("click",function(){
    if (!colorAuto.value || !marcaAuto.value || !modeloAuto.value){
        alert("Complete todo los campos!");
        return;
    }
    let auto = {
        color : colorAuto.value,
        marca : marcaAuto.value,
        modelo : modeloAuto.value
    }
    parrafo.innerHTML = `<strong>Auto de color ${auto.color} de marca ${auto.marca} y modelo ${auto.modelo}</strong>`;
})
parrafo.innerHTML = `<p><strong>Soy un parrafo en negrita modificado</strong></p>`;

/*3. Filtrar autos por color
Descripción: Dado un array de autos: Crear un input para ingresar un color | Filtrar un array de autos y mostrar los que coinciden al presionar un botón*/
const autos = [
{ marca: "Toyota", modelo: "Etios", color: "gris" },
{ marca: "Ford", modelo: "Focus", color: "negro" },
{ marca: "Chevrolet", modelo: "Onix", color: "blanco" },
{ marca: "Renault", modelo: "Clio", color: "gris" },
{ marca: "Volkswagen", modelo: "Golf", color: "verde" },
{ marca: "Peugeot", modelo: "208", color: "azul" },
{ marca: "Honda", modelo: "Civic", color: "rojo" },
{ marca: "Fiat", modelo: "Palio", color: "gris" },
{ marca: "Nissan", modelo: "Versa", color: "gris" },
{ marca: "Hyundai", modelo: "i30", color: "plateado" }
]
let colorI = document.getElementById("ingresoDeColor");
let botonCoincidencias = document.getElementById("coincidencias");
let resultado = document.getElementById("resultado");
botonCoincidencias.addEventListener("click",function(){
    let filtro = filtroPorColor(autos,colorI.value);
    if(!filtro.length){ //si esta vacio - "no hay largo"
        console.log("No se encontraron coincidencias");
    }else{ 
        console.table(filtro);
        for(let i = 0; i < filtro.length; i++){
            resultado.innerHTML += filtro[i].marca + filtro[i].modelo + filtro[i].color + `<br>`;
        }
    }
})

function filtroPorColor(array, color){
    /*Por parametro hay un color, filtra del array las coincidencias de color*/
    let filtro = array.filter(elemento => elemento.color === color);
    return filtro;
}


/*4. Mostrar una lista de autos de marca Fiat
Descripción: Agregar cada modelo a una lista <ul> dinámica.*/
const autos2 = [
{ marca: "Toyota", modelo: "Etios", color: "gris" },
{ marca: "Ford", modelo: "Focus", color: "negro" },
{ marca: "Fiat", modelo: "Palio", color: "blanco" },
{ marca: "Renault", modelo: "Clio", color: "gris" },
{ marca: "Fiat", modelo: "Cronos", color: "verde" },
{ marca: "Peugeot", modelo: "208", color: "azul" },
{ marca: "Honda", modelo: "Civic", color: "rojo" },
{ marca: "Fiat", modelo: "Mobi", color: "gris" },
{ marca: "Nissan", modelo: "Versa", color: "gris" },
{ marca: "Fiat", modelo: "Uno", color: "plateado" }
]
// Resultado:
// Modelos de autos marca Fiat:
// • Palio
// • Cronos
// • Mobi
// • Uno*/
let marca = document.getElementById("ingresoMarcas"); //ingreso de marca por input
let botonList = document.getElementById("botonModelos"); //para mostrar la lista
let lista = document.getElementById("resultadoLista");

botonList.addEventListener("click",function(){
    /*agregar a una lsita dinamica*/ 
    lista.innerHTML = `Modelos de ${marca.value}`;
    //recibo el filtro de marcas, debo mostrar (modelos)
    let marcaFiltrada = filtroPorMarca(autos2,marca.value);
    //console.table(marcaFiltrada);
    for(let i = 0; i < marcaFiltrada.length;i++){
        lista.innerHTML +=  `<li>` + marcaFiltrada[i].modelo;
    }
    lista.innerHTML += `</li>`
});

function filtroPorMarca(array,marca){
    /*recibir una marca por parametro, la cual va a ser filtro de un array*/ 
    // debe ser un array correspondiente sino tirara error de no tener un atributo marca
    let filtro = array.filter(elemento => elemento.marca === marca);
    return filtro;
}

/* 5. Cambiar color de fondo y guardarlo
Descripción: Usar <input type="color"> para elegir un color. | Cambiar el color de fondo del sitio al seleccionar. |Guardar el color en localStorage.*/




/* 6. Usar .map() para crear una lista en el DOM
Descripción: Crear un array de nombres | Usar .map() para transformar cada nombre en un <li> | Insertar esos <li> en un <ul>*/
const nombres = ["Candela","Magali","Romina","Paula","Mora","Berenice"];
let items = nombres.map(nombre => `<li>${nombre}</li>`);
let listaNombres = document.getElementById("listaNombres");
listaNombres.innerHTML = `Lista de nombres` + items;

/*7. Usar .some() para verificar si hay mayores de edad
Descripción: Mostrar en un <h2> si hay al menos una persona mayor de 30 años.*/
const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 14, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'Maria', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 35, calificaciones: [7, 6, 5, 8] }
];
let mayores = estudiantes.some(e => e.edad > 18);
console.log(mayores);
let dato = document.getElementById("personaMayor");
dato.innerHTML = estudiantes.some(e => e.edad > 30);












