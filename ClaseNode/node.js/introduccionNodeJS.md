# ¿Que son los modulos en JavaScript?
Un archivo que contiene codigo organizado en unidades independientes, mejora mantenimientos, organizacion y escalabilidad de apps: funciones, variables, lcases o objetos, que pueden ser exportados para ser utilizados en otros archivos

*Modulos nativos (preinstalados) de Node.js*

`os` -> Operative System. Permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js

* archivo ClaseNode/index.js

`fs` -> File System. Permite interactuar con el sistema de archivos para leer, escribir, actualizar y borrar archivos.

`path` -> Ayuda a manejar y manipular rutas de archivos de forma segura y comoda


# servidor basico con Node.js
Usando modulo nativo HTTP
Nos permite crear un servidor web sin necesitad de instalar nada adicional

<!--explicacion del codigo en index.js/levantar servidor-->
* importamos el modulo http
* crear uin servidor -> http.createServer -> para que escuche las solicitudes de los clientes y les responda
* definir respuesta del servidor al cliente
* escuchar en un puerto -> puerto 300 o cualquier pyuerto libre y muestra un mensaje en la consola cuando este listo
