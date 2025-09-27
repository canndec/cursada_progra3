/*
agregar al localStorage : setear contraer SI
mostrar carrito en html SI
filtrar productos SI
agregar a carrito - mostrar carrito SI
vaciar carrito SI
botones SI  

wrap - SI
- flex - SI
 f...?
hacer es esto,recibe,hace . documentacion
*/

console.log("hola");
/*
renderizacion producto
mostrar
lcoalstorge
*/ 

let productosTienda = [
    {id:1,nombre:"monitor 32k", precio:1000, ruta_img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.de%2Fp%2F160x160%2F0%2F4%2FAcer_Nitro_KG282K__Gaming_Monitor%40%401714340.jpg&f=1&nofb=1&ipt=3164c0315a18feb1561a749085c156c27e1d7bb1c93e2a9c9029c58bff327cab"},
    {id:2,nombre:"mouse", precio:200, ruta_img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cyberpuerta.mx%2Fimg%2Fproduct%2FS%2FCP-RAZER-RZ01-04000100-R3U1-89e889.jpg&f=1&nofb=1&ipt=529c9537cd983f8e14c0d2ca8cb0d7c9382b279ec9f502a7c510e1f60a8dcbe7"},
    {id:3,nombre:"parlante", precio:400, ruta_img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.heavenimagenes.com%2Fheavencommerce%2Fd86f9793-89bd-4e00-8fd3-fdfdc49c7186%2Fimages%2Fv2%2FNOGA%2F9588_small.jpg&f=1&nofb=1&ipt=4fe5de45b44ef7ee8c6c10eb35a4a6431b9738cc28cf689fb5baf676f0daab3c"},
    {id:4,nombre:"teclado", precio:500, ruta_img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.OQJje4U2Gu89hh8Hr5lebQAAAA%3Fpid%3DApi&f=1&ipt=7c4f68062a959e1537340ea45a6447baa55b2d8890d1c36fb7e8bc84dc887d88"},
    {id:5,nombre:"mousePad", precio:100, ruta_img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.rdiN2IlzllcffH_aQYTPcwAAAA%3Fpid%3DApi&f=1&ipt=1fb5197b5a71b43ee9a318655343a4c16f69ccec8f7fed2f7540fa8339a3daf6"},
    {id:6,nombre:"auriculares", precio:350, ruta_img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumb.pccomponentes.com%2Fw-150-150%2Farticles%2F1081%2F10817488%2F1501-tempest-ghs400-inquisitor-auriculares-gaming-rgb-wireless-pc.jpg&f=1&nofb=1&ipt=53718ebee81d00704792b0022f084af7b258d0b22f36341c53026513ea83001b"}
]
console.table(productosTienda);
console.log(productosTienda);
let listadoProductos = document.getElementById("listadoProductos");
let cartaProducto = ""; /*HELP INICIALIZARRRRRR producto = objeto*/
let carrito = [];
let objetosCarrito = document.getElementById("elementos");


//botones extra
let barraBusqueda = document.getElementById("barraBusqueda"); //es para filtrar productos
barraBusqueda.addEventListener("keyup",function(){ /*keyup, cuando termine de seleccionar, keydown cuando lo seleccione por primera vez*/
    let valorBusqueda = barraBusqueda.value.toLowerCase();
    //console.log(event.key); //eventos que registra,clicks
    //console.log(valorBusqueda);
    /* funcion flecha con multiples argumentos
    let productosFiltrados = productosTienda.filter(producto => {
        return producto.nombre.includes(valorBusqueda);
        });*/
        let productosFiltrados = productosTienda.filter(producto => producto.nombre.toLowerCase().includes(valorBusqueda));
        console.table(productosFiltrados);
        mostrarProductos(productosFiltrados);
    });    

let precioVarTotal = 0; //la hago global para acceder
let finalizarCompra = document.getElementById("botonFinalizar");
finalizarCompra.addEventListener("click",function(){
    alert(`Su monto final a pagar es de $${precioVarTotal}. ¡Muchas gracias por su compra! :)`);
});

let vaciarCarrito = document.getElementById("botonVaciar");
vaciarCarrito.addEventListener("click",function(){
    carrito = [];
    precioVarTotal = 0;
    contador = [];
    mostrarCarrito(carrito);
    cargarLocalStorage();
});

// funciones
function mostrarProductos (array){
/*Representacion de productos finales, su imagen, nombre, precio y su boton para agregar a carrito */
    cartaProducto = ""; //necesario vaciar/resetear los divs previos
    array.forEach(producto =>{
        cartaProducto += `
        <div class="card-producto">
            <img src="${producto.ruta_img}" alt="">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarACarrito(${producto.id})">Agregar al carrito</button> 
        </div> 
        `; //con atributo onclick todos lo escuchan
    });
    listadoProductos.innerHTML = cartaProducto;
}

mostrarProductos(productosTienda);
    /*
    <div class="card-producto">
    <img src="" alt="">
    <h3></h3>
    <p>$</p>
    <button>Agregar al carrito</button>
    </div>*/
    
let contador = []; //para contar cantidades de producto rep
function agregarACarrito(id){
/**cada elemento que sea seleecionado se agrega al carrito en caso que no se encuentre, caos contario se agrega cantidad de ese producto*/
    let productoSeleccionado = productosTienda.find(producto => producto.id == id);
    let indice = carrito.findIndex(p => p.id == id);

    if(indice === -1){ //-1 es q no esta
        carrito.push(productoSeleccionado); //lo pusheo al carrito
        contador.push(1); //pusheo 1 en el contador(cantidad de productos de ese tipo/indice)
    } else {// si ya estaba el prodcto
        contador[indice] += 1; //agrego un 1 a cantidad de prod de ese indice
    }
    mostrarCarrito();
    cargarLocalStorage();
}
//carrito = JSON.parse(localStorage.getItem("carrito"));

function mostrarCarrito(){
/**mostrar los elementos que estan dentro del array carrito */
    let cartaCarrito = ""; //reinicializo
    precioVarTotal = 0;
    carrito.forEach((producto, indice) => {
        precioVarTotal += producto.precio * contador[indice]; // asi se actualiza el total, precio*cantidad
        cartaCarrito += `
            <li id="infoProdCarrito"> 
                <p>Cantidad: ${contador[indice]}</p>
                <p>${producto.nombre.toUpperCase()} - $${producto.precio * contador[indice]}</p> 
                <button id="botonEliminar" onclick="eliminarProducto(${indice})">Eliminar</button>
            </li>`
            ;
    });
    objetosCarrito.innerHTML = cartaCarrito;
    document.getElementById("totalMonto").textContent = `Total: $${precioVarTotal}`; //va reemplazando segun productos ingresados en html(esta en top)
}

function eliminarProducto(indice){
    /* Al seleccionar el boton eliminar, se elimina uno a uno los elementos*/
    contador[indice] -= 1;

    if(contador[indice] <= 0 ){ 
        //si la cantidad de ese producto es menor a 0
        carrito.splice(indice, 1); //un solo elemento se elimina
        contador.splice(indice,1);
    }
    mostrarCarrito();
    cargarLocalStorage();
}
function cargarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("contador", JSON.stringify(contador));
}

/* prueba anterior
function eliminarProducto(indice) {
    //carrito = carrito.filter(producto => producto.id !== id);
    precioVarTotal -= carrito[indice].precio; //resta el precio del producto
    carrito.splice(indice, 1); //eliminar solo el que selecciono -> si selecciono muchos de un mismo producto
    // SPLICE: elimina segun indice, elimina cantidad de elementos desde esa posición.
    mostrarCarrito();
}*/


// para guardar y cargar carrito - en caso de que haya elementos en el carrito
// al refrescar la pagina seguiran apareciendo
const carritoGuardado = localStorage.getItem("carrito");
const contadorGuardado = localStorage.getItem("contador");

    if (carritoGuardado && contadorGuardado) {
        carrito = JSON.parse(carritoGuardado);
        contador = JSON.parse(contadorGuardado);
    } else {
        carrito = [];
        contador = [];
    }
mostrarCarrito();