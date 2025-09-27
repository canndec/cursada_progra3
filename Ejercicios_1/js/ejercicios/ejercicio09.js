/* 
simular un sistema de compra de cafeteras de un usuario y calcular un descuento según su edad y si tiene premium.
Puede comprar hasta 4 cafeteras.
Precio base $66400 c/u

Si tiene menos de 18 tendrá un 25% de descuento
Si tiene menos de 30 tendrá un 15% de descuento
si tiene premium tiene un 10% de descuento adicional

el sistema debe mostrar:
    nombre, edad, membresia.
    1. El precio total sin descuento.
    2. El monto total del descuento aplicado.
    3. El precio final a pagar.
*/
const usuario = prompt("ingrese su nombre de usuario");
const edad = prompt("ingrese su edad");
const membresia = Boolean(prompt("¿tiene membresia?"));
let precioXCafetera = 1000;

cantCafeteras = 4;
let precioBase = 66400;

while(cantCafeteras != 0 && precioBase != 0 ){
    let precioBase = seleccionarProducto();
    let descuento = calcularDescuento(porcentajeDescuento(edad),precioXCafetera,calcularPorcentajeAdicional(membresia));//plata a descontar
    precioFinal = precioBase - descuento;
    cantCafeteras -= 1;
    console.log("nombre:",usuario,"\nedad:",edad,"\nmembresia:",membresia,"\nprecio sin descuento:",precioBase,"\ndescuento a aplicar:",descuento,"\n monto a pagar:",precioFinal);
}

const mensaje = prompt("Ingrese el numero correspondiente a lo que desee comprar")
let precios = [1000,2000,1600,1400];

function seleccionarProducto(){
    switch(mensaje){
        case 1 :
            console.log("cafetera1 $",[2]);
            return precios[2];
        case 2 :
            console.log("cafetera2 $",[3]);
            return precios[3];
        case 3 :
            console.log("cafetera3 $",[1]);
            return precios[1];
        case 4 :
            console.log("cafetera4 $",[0]);
            return precios[0];
    }
}


function calcularDescuento(porcentaje,precio,adicional){
    if(adicional != null){
        porcentaje += adicional;
        return precio *= porcentaje 
    }else{
        return precio *= porcentaje;
    }
}

function porcentajeDescuento(edad){
    if(edad < 18){
        return 0.25;
    }else{
        return 0.15;
    }
}
function calcularPorcentajeAdicional(membresia){
    return "si" ? 0.10 : null;
}

