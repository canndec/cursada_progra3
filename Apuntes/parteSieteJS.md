**Funciones de orden  superior, callbacks, asincronias/sincronias, funciones anidadas, descruting, spread operator, rest operator, clousers, callback hell, extra:wget,curl, web apis y tipos**

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis

# Funciones de orden superios - High Order Functions

Una funcion de orden superior es una funcioin que puede opera sobre otras funciones, como parametro o retornandola

1. recibir una o mas funciones como argumento(s)
2. devolver una funcion como resultado

*Callback*
funciones que se pasa como argumento a otra funcion y que se ejecuta despies de que algo haya ocurrido
- Se usa principalmente para
* ejecutar codigo despues de una tarea
* manejar tareas asincronas(leer archivos o pedir datos a un servidor)
* hacer le codigo mas flexible y utiizable
* como base de abstracciones mas complejas como promesas y async/await

`Los callbacks se usan mucho para`
    - Manejar eventos del usuario con addEventListener
    - Operaciones asincronas
    - Temporizadores
    - Procesamiento de datos
    - Comunicacion con servidores

`Caracteristicas principales `
1. Funciones como ciudadanos de primera clase, esto significa que las funciones pueden ser
    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones

2. Sincronia y Asincronia
- Callback sincrono simulando un proceso pesado -> Esto bloquea el hilo principal. Se ejecutan inmediatamente dentro del mismo ciclo de ejecucion usando funciones como forEah, map, filter

- Callback asincrono -> No bloquea el hilo principal, sino que se ejecuta en paralelo. Se ejecutan despues de un tiempo o de que una operacion externa termine. Fundamentales en programacion asincronica como AJAX

`Casos de uso comunes`
1. Temporizadores o timers
2. Eventos del DOM
3. Operaciones con arrays(foreach, map, filter)
4. Peticiones HTTP
5. Lectura de archivos (Node.js)
6. setTimeOut acepta callbacks


async 
await : no se ejecute lo siguiente hasta que se termine el await
await para hcer una conexion con url

rest operator -> agrupar lo que sobra.
const nums = [1, 2, 3, 4];
const [primero, ...resto] = nums;

spread operator -> expandir elementos
const persona = { nombre: "Kevin", edad: 23 };
const copia = { ...persona, ciudad: "Buenos Aires" }

*Diferencia entre callbacks y high order function*
* Callback es la funcion pasada como argumento (dentro de una HOF)
* High Order Function es la funcion que recibe o devuelve funciones 

*Funciones de orden superior/ High Order Function / HOF*
Operan sobre otras funciones como parametros o retornandolas
*Recibir una o mas funciones como argumento(s)
*Devolver una funcion como resultado

Se usan ya que permite ABSTRACCION, escribir codigo mas abstracto y reutilizable y COMPOSICION, ya que facilitan combinar funcionalidades pequeñas en logicas mas complejas
`Ventajas`
Reduccion de codigo repetitido, mejor legibildiad y expresividad,(composicion funcional) permite encadenar transformaciones como map. filter .reduce

.map() es un metodo de array y tambien una HOF -> recibe como argumento otra funcion (para aplicarla y crear otra)

# Funciones anidadas
Funcion interna que vive en el scope o ambito de una funcion externa

- Se declara dentro de otra funcion 
- Tiene acceso a todas las viariables y parametros de su funcion externa
- Para organizar mejor el codigo, modularizar la logica o crear closures
- Funciona como funcion helper privada, simula privasidad ya que no son accesibles
- Genera closures*

# Descruting / Desestructuracion
Sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlos a variables
Forma de descomponer estructuras de datos como arrays y objetos, sin necesidad de acceder manualmente

- Mejora la legibilidad
- Facilita el acceso rapido a datos de estructuras complejas
- Reduce la verbosidad
- Se puede usar como parametros de una funcion/ compuestos 
const uno = numeros[0]; const dos = numeros[1]; console.log(uno, dos);
Con destructuring: 
const [primero, segundo, ...resto] = numeros;

# Spread Operator
Sintaxis introducida en ES6 que permite descomponer elementos iterables en elementos individuales
Su funcion es copiar, combinar o expandir estructuras de datos de manera eficiente

# Rest Operator vs Spread Operator
rest operator -> agrupar lo que sobra
spread operator -> expandir elementos

# Closures
Funcion que recuerda el scope en el que fue creada, aunque haya terminado su ejecucion
Cada vez que se generan funciones anidadas se crea un closure. La funcion interna captura las variales de su entorno(scope) externoy mantiene una referencia de ellas(no una copia)

- Recordar valores sin usar variables globales
- Crear funciones privadas
- Hacer el codigo mas limpio y modular

Ejemplo crearContador -> retorna una funcion interna anonima, recuerda la variable contador cada vez que la llamamosfunction crearContador() { let contador = 0; return function() { contador++;return contador; }}

# Callbacks parte 2

# Callback hell
dragonball
Cuando se hacen tareas asincronicas como leer archivos, esperar respuestas, genera muchas funciones anidads y relentiza; el codigo se vuelve dificil de leer, mantener y facil de romper

*¿Cómo solucionarlo?*
1. Usando Promise
hacerAlgo()
    .then(res1 => hacerAlgoMas(res1))
    .then(res2 => continuar(res2))
    .then(res3 => terminar(res3))
    .then(() => console.log("Listo!"))
    .catch(error => console.error(error));

2. Usando async/await -> mas moderno y legible
async function ejecutarTareas() {
    try {
        const res1 = await hacerAlgo();
        const res2 = await hacerAlgoMas(res1);
        const res3 = await continuar(res2);
        await terminar(res3);
        console.log("Listo!");
    } catch(error) {
        console.error(error);
    }
}

`Ejemplo con Promesas (sintaxis clasica)`

fetch("https://jsonplaceholder.typicode.com/users") // Traemos el choclo JSON de una URL

    .then(response => response.json()) // Transformamos el JSON en objetos JavaScript
    .then(data => console.table(data)) // Mostrarmos nuestros objetos JavaScript por consola
    .catch(error => console.error(error)); // Si hubiera un error, lo mostraria en consola con un formato error

`Ejemplo con async/await (sintaxis moderna)`
async function obtenerDatos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");// Traemos el choclo JSON de una URL
        
        const data = await res.json();// Transformamos el JSON en objetos JS
        
        console.table(data);// Mostramos nuestros objetos JS por consola
    } catch(err) {
        console.error(err);// Si hubiera un error, lo mostraria en consola con un formato error
    }
}

# [EXTRA] #########
Con linux se puede usar wget y curl para hacer solicitudes como descargar paginas web completas

# Wget -> (comando de descarga de archivos en internet)
- Desarrollada por el Proyecto GNU diseñada para recuperar archivos desde internet utilziando protocolos HTTP, HTTPS, FTP y FTPS(desde la version 1.18)
- Herramienta no interactica , ideal ara su uso en scripts, tareas programadas (cron) o en entornos sin interfaz grafica
World Wide Web + get
- Capacidad de automatizar descargas, replicar sitios web y manejas descargas compleas
- Es ideal para descargas simples, recursivas y automatizadas, especialmente de sitios web completos, gracias a su facilidad de uso y manejo automático de redirecciones y reintentos

# Curl
- Versátil y potente, actuando como un cliente multiprotocolo que permite interactuar con APIs, enviar datos mediante POST, personalizar cabeceras y trabajar con más de 25 protocolos, lo que lo convierte en la opción preferida para tareas avanzadas de red y desarrollo.

*Diferencias clave radican en su propósito*
wget se centra en la descarga robusta y automatizada, mientras que curl destaca en la interacción flexible con servicios en red.

(en el readme hay una tabla comparativa mas cool)

# Web APIS - Applicaion Programming Interface
Es un conjunto de funciones y herramientas que usamos para interactuar con el navegador, servidor o una libreria. Estas funciones extra del navegador le presta a JS para cosas utiles
Estas herramientas son externas al lenguaje JS puro
funcionalidades extra:
- DOM 
- setTimeout() ejecuta una funcion despues de un tiempo y el navegador proporciona esa API
- fetch() hace peticiones HTTP y nos lo proporciona el navegador
- console.log() muestra datos""
- localStorage guarda datos""
- trabajar con audio, video,GPS

*RESUMEN* 
- API: Un conjunto de funciones para interactuar con algo
- Web API: Funciones que el navegador le ofrece a JavaScript
- fetch(): Web API para hacer peticiones HTTP
- setTimeout(): Web API para ejecutar codigo con demora
- JavaScript usa Web APIs, pero no estan dentro del lenguaje sino que las define el navegador

# Tipos de Web APIs mas comunes

1. APIs del DOM
acceder y modifiar el HTML y CSS de la pagina
- document.querySelector()
- element.addEventListener()
- classList.add()

2. APIs de red
comunicarse con servidores o cargar recursos
Peticiones HTTP, chat, notificaciones en tiempo real
-  fetch() la mas moderna
- XMLHttpRequest antigua
- WebSocket para comunicion en tiempo real
- EventSource (Eventos enviados por el servidor)

3. APIs de almacenamiento
guarda informacion en el navegador; preferencias, datos de sesion, apps sin conexion
- localStorage
- sessionStorage
- indexDB
- Cookies (mediante document.cookie)

4. Timers
ejecutar luego de un cierto tiempo, retrasos, animaciones
- setTimeout()
- setInterval()
- clearTimeout() y clearInterval()

5. APIs de dispositivos y multimedia
interaccion con hardware o medios; apps moviles, camara, permisos, grabaciones, notificaciones
- navigator.geolocation: para gps
- MediaDevices.getUserMedia(): microfono y camara
- Notificacion: notificaciones del sistema
- Batery API, Clipboard API

6. APIs de interfaz grafico
controla animaciones, graficos dinamicos, juegos y visualizaciones
- Canvas API
- WebGL
- Fullscreen API
- Screen Orientation API

7. APIs de Workers y ejecucion
ejecutan condigo en segundo plano; procesos paralelos, apps progesivas sin bloquear interfaz
- Web Workers
- Service Workers
- Shared Workers
