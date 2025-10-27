TODO


## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch

# JSON
Formato ligero de intercambio de datos estandar entre aplicaciones en la web. Formato de texto que representa datos estructurados basados en colecciones de pares nombre/valor (como un objeto) y como lista ordenada de valores (array)

`Usos comunes`
. Comunicacion cliente-servidor: JSON es el estandar para APIs Rest
. Almacenamiento local: datos en el navegador
. Configuraciones: package.json en Node.js

# Asincronia
Capaidad de un programa de ejecutar tareas que toman tiempo (cceder a una API, esperar a un temporizador) sin bloquear la ejecucion del resto del codigo

JavaScript - single-threaded (de un solo hilo)

*Heramientas de JS para asincronia*
. Temporizadores: setTimeout y setInterval
. Callbacks: puede generan un callback hell
. Promesas: 

# Promesas
Objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Aparecen en 2015 en EcmaScript 2015
representa el resultado futuro de una operacion asincronica

`Estados`
. pending (esperando)
. fillfilled (completado)
. rejected (rechazado)

const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos listos")
        }, 1000)
    });

    promesa.then(data => console.log(data));

*Fetch y promesas*
fetch: Es una funcion API web . devuelve una promesa ysimepre trabaja de forma asincronica
promesa: Es un objeto nativo de JS . puede ser usanda en fetch() y controla valores futuros, maneja cosas que toman tiempo

**1. Hacemos una peticion http**
fetch("https://jsonplaceholder.typicode.com/users") 

    // 2. Se resuelve con una response (respuesta del servidor)
    .then(respuesta => respuesta.json()) 
    .then(data => console.log(data))

    // 3. Se rechaza si hay un error de red
    .catch(error => console.error(error));

*Fetch en JS*
Permite realizar peticiones HTTP y HTTPS
Fue introducida como parte del Fetch API para reemplazar al viejo y complejo XMLHttpRequest
. Devuelve un objeto Promise que se resuelve con un objeto Response
. Usa el estandar HTTP: metodos como get, post, put, delete
. Funciona bien con async/await
. Es mas limpia y moderna que XMLHttrequest
. Soporta CORS, headers, envio de JSON

**-**
fetch(url, opciones)
    .then(response => {
        // respuesta cruda del servidor
    })
    .catch(error => {
        error de red o fallo local
    })
. url: string, a la que queremos hacer la solicitud
. options: objeto que especifica configuracion adicional como metodo, headers(cabeceras), cuerpo (body)...

**ejemplo completo con GET**
fetch("https://api.example.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        return response.json(); // Transformamos a objeto JS
    })
    .then(data => {
        console.log("Usuarios: ", data);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });

**ejemplo con opciones POST**
fetch("http://api.example.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        titulo: "Holis",
        contenido: "Esto es un post"
    })
})
.then(response => response.json())
.then(data => console.log("Respuesta del servidor:", data))
.catch(error => console.error("Error:", error));

# El objeto Response

La promesa devuelta por fetch() se resuelve con un objeto Response que tiene:
- .ok -> booleano (true si status esta entre 200 y 299)
- .status -> codigo HTTP (200,404)
- .statusText -> texto del estado("OK", "Not Found")
- .headers -> cabeceras HTTP de la respuesta
- .json(), .text(), .fromData() -> para leer el contenido de la respuesta

`Manejo de errores`
- fetch() solo rechaza la promesa en errores de red reales (sin internet, servidor caido)
- no rechaza en codigos de erorr HTTP (404, o 500) por eso, debemos revisar con response.ok

# Async / Await 
Es "azucar sintactico", una forma mas breve y mas sencilla de leer sobre las Promises, hace el manejo de asincronia mas legible estructurado y facil de depurar

`Comparacion con Promesas`
. async/await es mas legible y secuencial
. provee mejor manejo de errores con try/catch
. ideal para flujos largos y complejos de asincronia

` ¿Cómo funciona async? `
La plabra clave se usa para declarar una funcion asíncrona, la cual siempre devuelve una Promesa, aunque el valor retornado no lo sea

- Aunque saludar() devuelva un String en realidad devuelve una Promise que se resuelve con ese valor: 

async function saludar(){
    return "Holis";
}

` ¿Qué hace await? `
La plabra clave pausa la ejecucion de la funcion async hasta que una Promesa sea resuelta (fulfilled) o rechazada (rejected)

- await espera que fetch() devuelva una Promesa resuelta antes de continuar
- el codigo despues de await no se ejecuta hasta que la promesa esté resuelta
- await solo se puede usar dentro de funciones async

` ¿Qué pasa internamente cuando usamos await? `
1. Evaluamos la expresion que devuelve una promesa
2. Suspendemos la ejecucion  de la funcion hasta que la promesa se resuelva o rechase
3. Si se resuelve se continua con el valor; si se rechaza, lanza un error que puede ser atrapado con try/catch

# Recordar
- await bloquea la ejecucion "dentro" de la funcion async pero no bloquea el hilo principal
- las funciones async siempre devuelven una promesa

**ejemplo**
async function obtenerDatos() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const datos = await respuesta.json();
        console.table(datos);

    // El bloque catch captura errores de cualquier promesa esperada con await
    } catch(error) {
        console.error("Ocurrio un error:", err);
    } finally {
        console.log("Peticion asincrona terminada");
    }
}

Si no hay dependencia entre las promesas podemos encadenar con Promise.all()

async function cargarTodo() {
    const [usuarios, posts] = await Promise.all([
        obtenerUsuarios(),
        obtenerPosts()
    ]);

    console.log(usuarios, posts);
}

// TO DO: Ejercicio sugerido, completen este encadenamiento con Promise.all usando la API REST publica de jsonplaceholder

# Try/Catch
estructura de control para capturar y manejar errores en tiempo de ejecucion, como...
. acceso a variables no definidas
. llamadas a funciones inexistentes
. errores lanzsados con trhwo
. problemas en funciones JSON.parse()
. no captura errores de sintaxis porque estos impides que el codigo ejecute

. Puede ocultar errores reales si no se maneja bien
. Tiene costo de rendimiento en bucles
. Usarlos donde hay riesgo real de error(input/output, parseol, operaiones de red, llamadas a APIs)
. Usar finally para cerrar recursos, limpiar o terminar tareas(conexiones, indicadores de carga, etc)
. Se puede lanzar nuestro propios errores con thrown new Error("personalizado")

# WebSockets
canal de comunicacion bidireccional en tiempo real entre un cliente y un servidor
. El cliente abre una conexion con el servidor una sola vez
. Esa conexion permanece abierta
. Tanto el cliente como el servidor pueden enviar y recibir mensajes en cualquier momento (comunicacion full-duplex) donde ambas partes pueden hablar a la vez

. A diferencia de fetch, que hace peticiones individuales, con WebSockets se mantiene una conexion abierta y persistente
- El cliente hace una peticion
- El servidor responde
- La conexion se cierra

- Casos de uso: Chats en tiempo real, Juegos online, Notificaciones en vivo, Monitoreao e datos en tiempo real

. En el websocket conviene cerrar, porque queda abierta esta conexion con socket.close() -> Esto libera reecursos y evita fugas de memoria
. En peticiones normales fetch, no hace falta

# [EXTRA] JSON vs XML
son dos formatos ampliamente utilizados para el intercambio y almacenamiento de datos, pero difieren significativamente en estructura, uso y eficiencia. **JSON (JavaScript Object Notation)** es más ligero, fácil de leer y rápido de analizar, lo que lo hace ideal para aplicaciones web modernas y servicios API. Por otro lado, **XML (Extensible Markup Language)** es más versátil y robusto, con soporte para espacios de nombres, comentarios y esquemas, lo que lo hace adecuado para configuraciones complejas y documentos estructurados jerarquica. 
Aunque ambos son autodescriptivos y jerárquicos, JSON domina en *entornos web dinámicos*, mientras que XML sigue siendo relevante en *sistemas empresariales y estándares técnicos*.

**[Cuadro mas completo en el github]**