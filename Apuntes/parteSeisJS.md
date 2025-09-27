## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos

# Manipulacion del DOM en JS

¿Que es el `DOM`? 
- Document Object Model - Objetos Del Documento
- es una representacion en memoria de la estructura de la pagina web
- transforma el HTML en una estructura de nodos y objetos que pueden ser manipulados mediante JavaScript
- cada etiqueta HTML es un nodo del DOM 
- el DOM permite que JS modifique el contenido, la estructura y el estilo de una pagina
- https://www.w3schools.com/js/js_htmldom.asp

- Diagrama de Arbol del DOM
// document
//   -html
//       - head
//          - title
//   -body
//       - h1
//       - p

* JavaScript puede:
- Modificar el contenido (textos, atributos, clases, etc)
- Añadir o eliminar elementos del DOM
- Escuchar eventos del usuario (clics, teclas, etc)

# Seleccion de elementos del DOM

* getElementById()
- selecciona un unico elemento (primer elemento que coincida) por su id, en caso de no encontrarlo devuelve null

* querySelector()
- selecciona el primer elemento que coincida con un selector CSS (por clase, id, nombre etiqueta)

* querySelectorAll()
- selecciona todos los elementos que coinciden con el selector CSS y devuelve una NodeList (similar a un array)

- EXTRA - 

* getElementByClassName()
- selecciona todos los elementos que tengan una clase especifica 

* getElementByTagName()
- selecciona todos los elementos de un tipo de etiqueta dado

# Modificar contenido y atributos
- una vez seleccionado un elemento se puede modificar su contenido, atributos o estilo

* textContect = " ";
- modificar el texto dentro de un elemento

* innerHTML = `<etiqueta>...`;
- modificar el contenido HTML dentro de un elemento

* setAttribute(" "," ")
- modificar los atributos de un elemento

* style.algoCSS = " "; 
- permite cambiar el estilo CSS en linea de un elemento

1. guardar en una variable el elemento
2. modificar a partir de su variable

> fetch
# Eventos en JavaScript
- señal que se envia cuando ocurre una interaccion o cambio en el documento
- para escuchar un evento y responder a el, se puede usar el metodos => addEventListener()
- este evento permite adjuntar una funcion a un evento especifico de un elemtno

# Tipos comunes de eventos

* Eventos de mouse
- click, dbclick, mouseover, mouseout, mousemove

* Eventos de teclado
- keydown, keyup

* Eventos de formulario
- submit, input, focus

* Eventos de ventana
- resize, scroll, load

//miBoton.addEventListener("click", function() {
//    console.log("Holis soy un boton");
// });

//inputPrueba.addEventListener("keydown"), function(event)

> event es el objeto que contiene TODOS los datos del evento

# Propagacion de eventos
- al ocurrir un evento, se propaga a traves del DOM en dos fases

1. fase de captura (de arriba para abajo)
2. fase de burbuja (de abajo hacia arriba)

* se puede detener la propagaciond e eventos con el metodo 
- event.stopPropagation()

* se puede evitar el comportamiento determinado de un elemento con 
- event.preventDefault()

# Almacenamiento persistente en JavaScript
js permite funcionalidades extra/complementarias para poder recordar ingormacion y que poersista del lado del cliente
. 3 metodos principales para el almacenamiento en el cliente quiere decir que la info no se guarda en el servidor: son localStorage, sessionStorage y las cookies

# localStorage
- es una API (funcionalidad extra que complementa JS) que permite almacenar datos de manera persistente en el navegador
- caso de uso: almacenar configuraciones de usuario, temas, carrito de compras, etc

localStorage.setItem("tema","oscuro");
localStorage.setItem("idioma","es");

* capacidad de almacenamiento: 5-10 MB
* persistencia: no tiene expiracion, esta disponible incluso cerrando el navegador o apagando la compu
* accesible solo desde JS (no se envia al servidos)
* los datos se almacenan por dominio y solo son accesibles dentro del mismo dominio
* los datos se almacenan como string: todos los datos almacenados en el local son de tipo string, por lo que para almacenar otro tipo de dato se deben convertir

    localStorage.setItem("clave", "informacioin texto plano");

    localStorage.getItem("clave");

    localStorage.removeItem("clave");

    localStorage.clear();

# sessionStorage
- es otra API similar a localStorage con diferencia clave: los datos almacenados solo se mantienen disponibles durante la sesion del navegador. Si cerramos la pestaña o ventana del navegador, los datos se eliminan automaticamente
- uso tipico: informacion de formularios o usuarios temporales

sessionStorage.setItem("usuarioTemporal","Rocio");

* capacidad de almacenamiento: 5-10 MB
* persistencia: solo rutante sesion activa
* accesible solo desde JS (no se envia al servidos)
* los datos se almacenan por dominio y solo son accesibles dentro del mismo dominio
* los datos se almacenan como string: todos los datos almacenados en el local son de tipo string, por lo que para almacenar otro tipo de dato se deben convertir
localStorage.setItem("clave", "informacioin texto plano");

    sessionStorage.setItem("clave", "informacioin texto plano"); 

    sessionStorage.getItem("clave");

    sessionStorage.removeItem("clave");

    sessionStorage.clear();

`¿Cuando No usar nunca localStorage o sessionStorage?`
- Para guardar informacion sensible como contaseñas o tokens de autenticacion. No es seguro ua que el contenido es accesible desde cualquier script en la pagina
- En ese caso, usariamos cookies seguras con Http0nly y Secure

# Cookies
Son pequeños fragmentos de informacion que se almacenan en el navegador del usuario y dse envian con cada peticion HTTP al servidos. Son mas antiguas que localStorage y sessionStorage y fueron ampliamente utilizadas para manteener la sesion del usuario, guardar preferencias, entre otros

Caracteristicas:
- se envian automaticamente al servido con cada solicitud HTTP
- tamaño maximo: 4KB
- expiran segun una fecha determinada (expires) o duracion (max-age)
- se pueden marcar con Http0nly (accesibles solo desde el servidor) y Secure (solo sobre HTTPS)

Uso principal: 
- autentificacion(tokens, sesion)
- preferencias del usuario que deben ser enviadas al servidos
- seguimiento (tracking de actividad en la web)

No existe una API estandar para gestionar cookie, las manejamos con el objeto (document.cookie)

`Metodos de JSON`
- para transformar texto plano JSON a objetos JS: JSON.parse()
- para transformar objetos JS a texto plano JSON: JSON.stringify()

- guardar la info con la palabra nombre en localStorage
localStorage.setItem("nombre","candela");

- obtenemos datos del localStorage -> devTools / Application o almacenamiento / Local Storage
let nombre = localStorage.getItem("carrito")

`Conversion de datos para almacenar en localStorage`
1. como carrito es un array de objetos, guardando como string(texto plano) -> JSON
2. necesitamos convertir a objetos JS nuestro string JSON (formato de texto plano)
let carrito = JSON.parse(localStorage.getItem("carrito"));
console.log(localStorage.getItem("carrito"))

3. creamos un objeto estudiante = {fghfgh}

4. convertimos el objeto en texto plano para poder almacenarlo en localStorage
localStorage.setItem("estudiante",JSON.stringfy(estudiante));
console.log(localStorage.getItem("estudiante")); //String {"g","f"}

5. traer mi clave desde localStorage, almacenado en formato JSON     
let estudianteAlmacenado = JSON.parse(localStorage.getItem("estudiante"));
console.log(estudianteAlmacenado) // Objeto: {``,``}

- Eliminar un dato especifico del localStorag:
localStorage.removeItem("nombre");

- Limpiar todo el localStorage:
localStorage.clear()

# practicas almacenar el carrito de compra

`Cookies`
- creamos una cookie:
document.cookie = "usuario=Jevin; expires=Fri, 31 Dec 2025 23:59:59 GTM;path=/";

- creamos una cookie sin expiracion (se elimina al cerrar el navegador):
document.cookie = "pais=Argentina; path=/";

- leemos las cookies:
console.log(document.cookie);

- eliminamos las cookies (ponemos una fecha de expiracion en el pasado):
document.cookie = "usuario= ;01 Jan 00:00:00 UTC; path=/"

- Ejemplo completo de uso de cookie:
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

- obtener el valor de una cookie
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

- establecemos una cookie
setCookie("idioma", "es", 7);

- leemos una cookie
console.log(getCookie("idioma"));

