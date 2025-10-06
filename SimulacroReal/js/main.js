let frutas = [
    {id:1,nombre:"anana",precio:100,ruta_img:"./img/anana.jpg"},
    {id:2,nombre:"arandano",precio:50,ruta_img:"./img/arandano.jpg"},
    {id:3,nombre:"banana",precio:150,ruta_img:"./img/banana.jpg"},
    {id:4,nombre:"frambuesa",precio:200,ruta_img:"./img/frambuesa.jpg"},
    {id:5,nombre:"frutas",precio:170,ruta_img:"./img/frutas.ico"},
    {id:6,nombre:"frutilla",precio:250,ruta_img:"./img/frutilla.jpg"},
    {id:7,nombre:"kiwi",precio:300,ruta_img:"./img/kiwi.jpg"},
    {id:8,nombre:"mandarina",precio:160,ruta_img:"./img/mandarina.jpg"},
    {id:9,nombre:"manzana",precio:100,ruta_img:"./img/manzana.jpg"},
    {id:10,nombre:"naranja",precio:90,ruta_img:"./img/naranja.jpg"},
    {id:11,nombre:"pera",precio:120,ruta_img:"./img/pera.jpg"},
    {id:12,nombre:"pomelo-amarillo",precio:170,ruta_img:"./img/pomelo-amarillo.jpg"},
    {id:13,nombre:"sandia",precio:320,ruta_img:"./img/sandia.jpg"},
];
let alumna = [
    {
    nombre: "Candela",
    apellido:"Corral",
    dni: 46498499
    }
];

//variables necesarias - manejo dom
let informacionAlumno = document.getElementById("informacionAlumno"); //contenedor apellido y nombre
let listadoProductos = document.getElementById("listadoProductos"); //listado de productos (los de pantalla rincipal)
let filtroPorTexto = document.getElementById("inputTexto"); //el input para filtrar por nombre
let listadoProdCarrito = document.getElementById("elementosCarrito"); //para guardar los datos de prod que se agreguen a carrito
let ordenarPorNombre = document.getElementById("ordenarPorNombre"); //boton para ordenar alfabeticamente
let ordenarPorPrecio = document.getElementById("ordenarPorPrecio"); //boton para ordenar por precio de menor a mayor
let vaciarCarrito = document.getElementById("botonVaciar"); //boton para vaciar completamente el carrito
let finalizar = document.getElementById("botonFinalizar"); //finalizar compra
//variables inicializadas
let infoDeProducto = ""; //informacion detallada del producto en cuestion
let carrito = [];
let cantidadProducto = []; //array que contiene las cantidades que el usuario selecciona de uin prod al agregasr a carrito
let infoProdCarrito = "";
let montoTotal = 0; //variable donde se guarda el monto total - actualiza a medida que se agregan productos


function imprimirDatosAlumno(array){
/*  punto 2
imprime los datos del alumno por consoa, ademas se modifica el html agregando un nav con los datos correspondientes
    */
    datosAlumno = "";
    array.forEach(a => {
        console.log(`Nombre: ${a.nombre} ${a.apellido} con DNI: ${a.dni}`);
        datosAlumno += `
            <nav>
            <p>${a.nombre} ${a.apellido}</p> 
            </nav>
        `;
    });
    informacionAlumno.innerHTML = datosAlumno;
}


function mostrarProductos(array){
/* punto 3
Recibe por parametro un array con el cual aplicara el metodo forEach para que se recorra y poder acceder a sus datos
Con estos crear un div que se incluira al html, con el detalle de cada producto, imagen,nombre y precio
*/
    infoDeProducto = "";
    array.forEach(p => {
        infoDeProducto += `
        <div class="card-producto">
            <img src="${p.ruta_img}" alt="">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <button id="botonAgregar"onclick="agregarACarrito(${p.id})">Agregar al carrito</button>
        </div>
        `;
    });
    listadoProductos.innerHTML = infoDeProducto;
    //localStorage
}

filtroPorTexto.addEventListener("keyup",function(){
/* PUNTO 4 
Manejo el input del html desde js. Se le tiene que agregar un "escuchador de evento" y ejecuta:
A medida que el usuario vaya ingresando letras/palabras, estas se van a guardar en una variable
En otra variable lo que se va a hacer es filtrar con .filter() los productos que coincidan en este caso, con el nombre,
se usa el metodo includes(), ya que no necesariamente tiene que escribir la palabra completa para que filtre el producto
Y se va mostrando los productos actualizados
*/
    let palabraABuscar = filtroPorTexto.value.toLowerCase(); // se guarda en una variable lo que ingresa el usuario por input
    let productoCoincidente = frutas.filter(p => p.nombre.toLowerCase().includes(palabraABuscar));
    mostrarProductos(productoCoincidente);
});

function agregarACarrito(indice){
/**PUNTO 5
 * Por parametro accede el indice de un producto
 * en una variable se va a guardar el producto que coincida(su propio id con el id del parametro) - usando el metodo find()
 * Ademas en otra variable se va a usar el metodo .findIndex() en el array de carrito(donde se almacenan los prod seleciconados)
 * para que retorne el indice, en caso que retorne -1(osea que no encuentra) significa que mo hay cantidades registradas, por lo que 
 * si se deberia pushear ese producto al carrito. En caso de que muestre un indice,(que significa que ya se cargo un producto con ese indice)
 * solo se acumulara 1 a ese array de cantidad(para luego mostrarlo por pantalla y no repetir el producto)
 */
    let productoSeleccionado = frutas.find(p => p.id == indice);
    let indiceEnCantidad = carrito.findIndex(p => p.id == indice);// es el indice en donde esta la cantidad de producto con el indice del parametro

    if(indiceEnCantidad === -1) { //osea que no hay/no esta
        carrito.push(productoSeleccionado);
        cantidadProducto.push(1); //este pushea 1 para que coincida con el push en carrito(osea el mismo producto)
    }else{
        cantidadProducto[indiceEnCantidad] += 1; //aumenta 1 a la cantidad de prod de ese tipo
        //no pushea en carrito porque ya se esta mostrando
    }
    mostrarCarrito();
    guardarLocalStorage();
    actualizaContadorProductos();
}

function mostrarCarrito(){
/**PUNTO 5
 * Se va a recorrer el array carrito para mostrar la descripcion del mismo(nombre, precio y un boton para eliminar) y luego agregarlo al html
 * ademas dentro del forEach(), hay un contador en el que se suma el precio de cada producto por la cantidad seleccionada.
 * Guarda los datos con localStorage ya que se modifica el carrito, en caso que se refresque la apgina seguiran apareciendo los rod seleccionados

PUNTO 7 - actualizacion del monto total:
 * actualiza el valor del html con la variable "montoTotal" la cual almacena la suma de los productos con
 * sus correspondientes cantidades  

*/
    infoProdCarrito = ""; //se reinicia la variable donde almacena carrito
    montoTotal = 0;
    carrito.forEach((producto,indice) => {
    montoTotal += producto.precio * cantidadProducto[indice];
    infoProdCarrito += `
        <li class="bloque-item">
            <p class="nombre-item">${producto.nombre} - $${producto.precio} - x${cantidadProducto[indice]}</p>
            <button class="boton-eliminar" onclick="eliminarProducto(${indice})">Eliminar</button>
        </li>`;
    });
    console.log(`Producto agregado:`,carrito);
    listadoProdCarrito.innerHTML = infoProdCarrito || "<p>No hay elementos en el carrito.</p>";
    guardarLocalStorage();
    document.getElementById("montoTotal").textContent = `Total: $${montoTotal}`;   //punto7
}

function eliminarProducto(indice){
/** PUNTO 5 
 * por parametro ingresa el indice del producto a eliminar. Por lo que al array que contiene las cantidades(cantidadProducto)con el indice
 * "indice" se le resta 1. En caso que en la posicion "indice" sea 0 o menos, se usara el metodo .splice() para reemplazar
 * el indice (ya sea del carrito como del array cantProductos), para que no aparezca mas. En caso que la cantidad sea mayor,
 * solo se restará 1. Despues se muestra el carrito actualizado y se guarda  con localStorage
 */
    cantidadProducto[indice] -= 1;
    if(cantidadProducto[indice] <= 0){
        carrito.splice(indice,1);
        cantidadProducto.splice(indice,1); //parte del punto 7
    }
    console.log(`Producto eliminado. Carrito:`, carrito);
    mostrarCarrito();
    actualizaContadorProductos();
    guardarLocalStorage();
}

function guardarLocalStorage(){
/** PUNTO 6
 *  guarda los datos del array carrito y cantidades, en el localStore
 */
    localStorage.setItem("carrito",JSON.stringify(carrito));
    localStorage.setItem("cantidadProducto",JSON.stringify(cantidadProducto)); //array de cantidades
}

function cargarLocalStorage(){
/** PUNTO 6 
 * Si se guardaron datos se cargan con localStorage, sino mostrara array vacio
 * simbolizando que no se habia guardado nada     
 *  Si hay elementos en el carrito puede que exista(que contenga datos) el array de cantidad como no, por eso
 * utilizo || en el return.
 */
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    cantidadProducto = JSON.parse(localStorage.getItem("cantidadProducto")) || [];
}

function actualizaContadorProductos(){
/** PUNTO 7
 * Utilizando el metodo .reduce(), en el array que maneja las cantidades de productos, devuelve
 * el numero de total de productos que se agregaron a carrito, se va actualizando y se modifica 
 * el html
 */
    let contador = cantidadProducto.reduce((acumulador,p) => acumulador += p,0);
    document.getElementById("carritoCantidad").textContent = `Cantidad: ${contador} productos`; //almacenar la cant de prod
}

ordenarPorNombre.addEventListener("click",function(){
/** PUNTO 8
 * para ordenar los productos alfabeticamente segun su nombre hay que utilizar el metodo .sort()
 * al cua se le pasan dos parametros. Estos mediante el metodo compararan y ordenaran, tambien apicando .toLowerCase()
 * en caso que haya alguna mayuscula, las pueda manejar igual. Tambienaplicando el metodo .slice() para hacer
 * una copia del array y no modificar el array de objetos original
 */

    let ordenadoAlf = frutas.slice().sort((a,b) => 
        a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()));
    mostrarProductos(ordenadoAlf);
});
ordenarPorPrecio.addEventListener("click",function(){
/**  PUNTO 8    
 * para ordenar los productos por precio del menor al mayor hago que el array principal implemente
 * el metodo .sort(), se le pasa dos parametros el cual mediante el metodo y acceso al precio de cada uno
 * ordena de menor a mayor. Aplica el metodo .slice() para no modificar el array principal 
 */
    let ordenadoPrecioMenAMayor = frutas.slice().sort((a,b) => a.precio - b.precio);
    mostrarProductos(ordenadoPrecioMenAMayor);
});

vaciarCarrito.addEventListener("click",function(){
/** PUNTO 9
 * Al clickear este boton, se reinician las variables qe contienen los datos(carrito, cantProductos, montoTotal)
 * se velve a cargar el localStorage y se muestra el carrito vacio
 */
    carrito = [];
    cantidadProducto = [];
    montoTotal = 0;
    guardarLocalStorage();
    mostrarCarrito();
});

finalizar.addEventListener("click",function(){
/**
 * Al clicker este boton saltara un .alert() y mostrará el monto final a pagar
 */
alert(`Su monto a pagar es de $${montoTotal}
¡Muchas gracias por su compra!`);

});


function init(){
    imprimirDatosAlumno(alumna);
    mostrarProductos(frutas);
    cargarLocalStorage();
    mostrarCarrito();
}
init();