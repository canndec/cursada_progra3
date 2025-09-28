let productos = [
    {id:1, nombre:"Microfibras", precio:1000, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/microfibra-opaco-x-101-4c0042feb17e54aa0415970855677441-1024-1024.webp"},
    {id:2, nombre:"Resaltadores", precio:1200, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/stabilooo1-26a7d5373defa8282715952637580086-1024-1024.webp"},
    {id:3, nombre:"Bibliorato", precio:2000, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/images-429b7aaec664eca92e17498510079960-1024-1024.webp"},
    {id:4, nombre:"Birome", precio:200, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/001-80d7f513290d4dd4d016818490333024-640-0-a3136cb04cf2d7d06717111144926686-1024-1024.webp"},
    {id:5, nombre:"Corrector", precio:400, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/corrector-filgo-liquido1-ba52138256614ba9ed16107155788401-1024-1024.webp"},
    {id:6, nombre:"Goma de borrar", precio:100, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/maped-blanca1-32fa3e940878eb6e6c15942178585221-1024-1024.webp"},
    {id:7, nombre:"Clasificador", precio:1700, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/clasificador-01ca0c09fa3c9c5f9f17151897958419-1024-1024.webp"},
    {id:8, nombre:"Cuader A4", precio:800, ruta_img:"https://acdn-us.mitiendanube.com/stores/001/128/573/products/112705-280a78a232384ce47c17138794614079-480-0-e24345fce67d8abb9217404090733990-1024-1024.webp"}
];

let cartaDeProducto = ""; //inicializar - de general
let carrito = []; //elementos a carrito
let cantidadProducto = []; //cant de produc de cada tipo
let precioVarTotal = 0; //total a pagar 

//botones - DOM
let listadoProducto = document.getElementById("listadoProductos"); //para almacenar prod y descripcion
let productosDeCarrito = document.getElementById("productoCarrito"); //los productos dentro del carrito
let filtrado = document.getElementById("inputFiltro");
let filtroPrecio = document.getElementById("botonPorPrecio");
let filtroAlf = document.getElementById("botonPorOrden");
let atras = document.getElementById("botonAtras");
let finalizar = document.getElementById("botonFinalizar");
let vaciar = document.getElementById("botonVaciar");


//BOTONES - INPUTS
filtrado.addEventListener("keyup", function(){ //entra lo que se escriba en el input
    let palabraABuscar = filtrado.value.toLowerCase();
    let productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(palabraABuscar));
    mostrarProductos(productosFiltrados);
});

atras.addEventListener("click",function(){
    mostrarProductos(productos);/////////
});
filtroPrecio.addEventListener("click",function(){
/**ordena los articulos que estas para comprar por orden de precio,del mas barato al mas caro */
    let prodPorPrecio = productos.sort((a,b) =>{
        if(a.precio < b.precio){return -1;}
        if(a.precio > b.precio){return 1;}
        else{return 0;}
    });
    mostrarProductos(prodPorPrecio);
});

filtroAlf.addEventListener("click",function(){
    let prodPorAlf = productos.sort((a,b) => {
        if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){return -1;}
        if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){return 1;}
        else{return 0;}
    });
    mostrarProductos(prodPorAlf);
});

finalizar.addEventListener("click",function(){
/*muestra por pantalla un mensaje con el monto a pagar*/
alert(`Su monto total a pagar es de $${precioVarTotal}
¡Muchas Gracias por su compra!`);
});

vaciar.addEventListener("click",function(){
/*vacia todo lo que habia dentro del carrito */
    precioVarTotal = 0;
    carrito = [];
    cantidadProducto = [];
    mostrarCarrito();
    agregarLocalStorage();
});

//FUNCIONES 
function mostrarProductos(array){
    /*Muestra la "carta presentacion" de todos los productos disponibles*/
    cartaDeProducto = ""; //vaciar
    array.forEach(p => {
        cartaDeProducto += `
        <div id="presentacionProd">
            <p>${p.nombre}</p>
            <img src="${p.ruta_img}">
            <p>$${p.precio}</p>
            <button onclick="agregarProducto(${p.id})">Agregar a carrito</button>
        </div>
        `
    });
    listadoProducto.innerHTML = cartaDeProducto;
}
mostrarProductos(productos);

function agregarProducto(indice){
    /*Segun el parametro(indice de un producto de la tienda) se sumará al carrito
    en caso que se seleccione mas de una vez, aumentara su contador de cantidad(por lo tanto su array)
    */ 
    let productoSeleccionado = productos.find(p => p.id == indice); //encuentra el igual
    let checkIndice = carrito.findIndex(p => p.id == indice); //devuelve el indice (de la ubicacion en el carrito) en caso de que ya s encuentre registrado ese producto(indice)

    if(checkIndice === -1 ) { //osea que no esta
        carrito.push(productoSeleccionado);
        cantidadProducto.push(1); //cooncordancia porq pushean al mismo tiempo
    }else{
        cantidadProducto[checkIndice] += 1; //suma 1 a la cantidad de ese producto
    }
    mostrarCarrito();
    agregarLocalStorage();
}

function mostrarCarrito(){
    let cartaDeCarrito = "";
    precioVarTotal = 0;
    carrito.forEach((p,indice) => {
        precioVarTotal += p.precio * cantidadProducto[indice]; //esto es para ver el total de la compra
        cartaDeCarrito += `
        <li id="informacionProducto">
            <p>Cantidad: ${cantidadProducto[indice]}</p>
            <p>${p.nombre}</p>
            <p>Valor: $${p.precio * cantidadProducto[indice]}</p>
            <button onclick="eliminarProducto(${indice})">Eliminar</button>
        </li>
        `;
    });
    productosDeCarrito.innerHTML = cartaDeCarrito;
    document.getElementById("montoTotal").textContent = `Total: $${precioVarTotal}`; //para q vaya mod el total en el html
}

function eliminarProducto(indice){
    /*elimina uno en uno el producto con indice indice*/
    cantidadProducto[indice] -= 1; // bajo cantidad en 1
    if (cantidadProducto[indice] <= 0){
        carrito.splice(indice,1); //saca de carrito
        cantidadProducto.splice(indice,1); //tamb de la cant de prod, tienen que manejarse a la par
    }
    mostrarCarrito();
    agregarLocalStorage();
}

function agregarLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("cantidadProducto", JSON.stringify(cantidadProducto));
}

const carritoGuardado = localStorage.getItem("carrito");
const cantidadesGuardadas = localStorage.getItem("cantidadProducto");
if(carritoGuardado && cantidadesGuardadas){
    carrito = JSON.parse(carritoGuardado); //vuelve a cargarse la info
    cantidadProducto = JSON.parse(cantidadesGuardadas);
}else{
    carrito = [];
    cantidadProducto = [];
}
mostrarCarrito();