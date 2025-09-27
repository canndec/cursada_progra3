## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

`Objetos globales en JavaScript: Navegador y Node.js`

// Objeto literal o object literal: La manera mas comun de crear objetos en javaScript
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2021,
    getInfo: function() {
        return "Este auto es un ${this.marca} del año ${this.anio}";
    }
};

# Objetos globales en el navegador
incluyen los objetos estandar y otros especificos para la interaccion con la pagina web y su entorno

1. Window: Objeto global de navegador principal
- Representa la ventana del navegador y actua como contenedor global para todas las variables, funciones y objetos globales de la pagina web
- todo lo definido en ambito global, esta disponible como priopiedad del objeto window

* document
representa el DOM de la pagina web actual, permitiendo al acceso y manipulacion de elementos HTML
. getElementById("id")

* alert() - prompt() - confirm()
mostrar dialogos o pedir input al usuario

* setTimeout() y setInterval()
. setInterval(() => console.log("Hola despues de 1 segundo"), 1000);

* location
proporciona info sobre la url actual de la pagina y nos permite redireccionar a otrar url
. console.log(window.location.href); // Url actual

* navigator
contiene informacion sobre el navegador, version, agente de usuario, geolocalizacion
. console.log(navigator.userAgent);

* console
proporciona cceso a la consola del navegador apra mostrar mensajes de depuracion

# Objetos globales en Node.js

1. Global
El objeto principal en Node.js, equivalente a window en el navegador

* process
proporciona informacion y control sobre el proceso de ejecucion de node.js

* __dirname - __filename
variables glob que contienen la ruta al directorio y archivo actual

* setTimeout() - setInterval() 
(como en gbl de navegador)

* require()
para importar modulos en node.js. Permite cargar bibliotecas externoas o modulos internos en el archivo

* console
(como en gbl de navegador)

# Almacenamiento de datos en JS

`Objeto Simple`
- para una unica entidad
- un objeto que almacena varias propiedades de ese objeto
- se usa cuando se quiere acceder a atributos especificos de una unica entidad
- se usa cuando se sabe que no habra multiples intancias o copias de datos en la aplicacion
- para acceder a propiedades especificas mediante sus nombres

`Array Simple`
- listas sencillas de datos primitivos
- para una lista ordenada de elementos individuales donde no tengtas atributos adicionales(obj)

`Array de Objetos`
- almacenar varias instancias del mismo tipo de entidad, donde todos tienen la misma estructura y atributos similares
- se usa si se necesita aplica metodos de los array como map, filter, reduce, find

# Iteraciones

`en Arrays`
* for tradicional
- maximo control, podemos usar break y continue
- mas verboso

* forEach()
- sintaxis mas limpia, no necesita contador
- no se puede romper el bucle (no break)

* map()
- transformamos cada elemento
- retorna un nuevo array con los resultados

* filter()
- seleccionar elementos que cumplan una condicion
- retorna nueva array con elementos filtrado

* reduce()
- reduce el array a un unico valor
- retorna el valor acumulado
- https://www.w3schools.com/jsref/jsref_reduce.asp

* find() y findIndex()
- busca el primer elemento que cumpla una condicion
- retorna ese elemento o indice (con undefined o -1 si no lo encuentra)

* for...of
- proporciona una sintaxis limpia, permite break y continue
- no provee indice automatico

* some() y every()
- verifican si alguno/todos cumplen una condicion
- retornan un booleano

`en Objetos`
* for...in
- iterar claves

* Object.keys()
- obtener claves

* Objects.values()
- obtener valores

* Objects.entries()
- obtener pares clave-valor

# Comparacion de rendimientos

1. bucles clasicos(for - while - do...while)
- son los mas rapidos para iteraciones simples
2. metodos funcionales (map - filter)
- son mas lentos pero mas expresivos
3. for...of 
- ofrece excelente equilibrio entre rendimineto y legibilidad 

# Recomendaciones de uso:

- Transformar array:        map()
- Filtrar elementos:        filter()
- Reducir a un valor:       reduce()
- Buscar elemento:          find() y findIndex()
- Necesidad romper bucle:   for y for...of (con break y continue)

