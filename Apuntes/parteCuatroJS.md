## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays

# Array
- lista ordenada de elementos
- se accede mediante indice array[0]
# Objeto
- coleccion de pares clave-valor. para un acceso rapido, estructuracion de datos
- se accede mendiante notacion de (objeto.clave) o (["clave"])

- La consola del navegador imprime una referencia, no una copia!

# Metodos de String
los tipos primitivos, JS los toma como objetos asi que les proporsiona metodos para manipularlos

- length
nos devuelve la longitud del string

- charAt(num)
Devuelve el caracter en la posicion especificada

- concat(" "," ")
Concatena strings

- includes("")
Devuelve true si el substring esta en el string

- startsWith("")
Comprueba si el string comienza con el substring

- endsWith("")
Comprueba si el string termina con el substring

- indexOf("")
Devuelve el indice de la primera aparicion del substring

- lastIndexOf("")
Devuelve la ultima aparicion del substring

- replace(" "," ")
Reemplaza una parte del string

- replaceAll(" "," ")
Reemplaza todas las apariciones

- toLowerCase
Convierte a minusculas

- toUpperCase
Convierte a mayusculas

- trim
Elimina espacios en blanco al principio y al final

- trimStart
Elimina espacios al inicio

- trimEnd
Elimina espacios al final

- slice(num,num)
Extraemos parte del string (lo que se marca, negativo empieza por el final) 

- substring(num,num)
Similar a slice, pero no acepta negativos

- substr
Obsoleto, similar a substring

- split(" ")
Divide el string en un array

- repeat(cant)
Repite el string

- match()
Devuelve coincidencias con una expresion regular (REGEX) console.log("abce123".match(/[aeiou]/gi)); // Extraemos las vocales

# Metodos de Arrays

- length
devuelve la longitud del array

- push
Agrega un elemento al final del array

- pop 
Elimina el ultimo elemento y lo devuelve

- unshift(elem)
Agrega un elemento al inicio del array

- shift()
elimina el primer elemento y lo devuelve

- concat([])
concatena arrays

- join("-")
une los elementos en un string

- slice(num,num)
extrae una copia parcial del array

- splice()
modifica el array in situ y permite borrar y agregar

- indexOf, lastIndexOf
primera y ultima posicion del elemento

- includes
devuelve true si el elemento existe

##
La notacion con punto suele ser mas rapida que notacion con corchetes, se beneficia de las optimizaciones en tiempo de compilacion.
La notacion entre corchetes aunque sea mas versati requiere que el motor evalue la expresion dentro de los corchetes en tiempo de ejecucion (sobrecarga)

La notación de puntos es preferible para nombres de propiedades estáticos y conocidos debido a su sintaxis limpia y concisa.  La notación entre corchetes es esencial para el acceso dinámico, como la iteración sobre las propiedades de los objetos con bucles «for...in» o el acceso a propiedades basadas en valores calculados