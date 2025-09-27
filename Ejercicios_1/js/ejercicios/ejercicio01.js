/* Un propietario desea cercar completamente un terreno utilizando vallas. Se sabe que el largo es de 40m y el ancho de 0.025km. (del terreno)
    1. Calcular la cantidad de metros que va a necesitar de vallas.
    2. Calcular la superficie total del terreno.
*/
const largo = 40;
const ancho = 0.025 * 1000; /*para calcular metro*/ 

const perimetro = 2 * (largo + ancho);
console.log("cant de metros necesarios de valla: ",perimetro," metros");
const superficie = largo * ancho;
console.log("superficie del terreno: ",superficie,"metros cuadrados");