// Un sistema solicita al usuario una contraseña para ingresar. Tiene hasta 3 intentos para acertarla. Si la contraseña es correcta, se le da acceso. De lo contrario, el acceso se deniega. Contraseña correcta "3propiedades"

const contraseñaCorrecta = "programacion3";

cantIntentos = 0;
    do{
        let contraseña = prompt("ingrese su contraseña:");
        if(contraseñaCorrecta === contraseña){
            console.log("Contraseña correcta...");
            break;
        }
        cantIntentos += 1 
    } while(cantIntentos <= 3);
