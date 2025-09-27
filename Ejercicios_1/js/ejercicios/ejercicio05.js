// Un agricultor desea saber cuántos kilogramos de frutas ha cosechado en 5 árboles. Cada árbol produce una cantidad distinta, que se ingresará en el sistema. Al finalizar, debe mostrarse la cantidad total recolectada. 

let cantidadFrutas = 0;

for(let i = 1; i <=5; i++){
    let frutos = prompt("ingrese los kilos consechados en el arbol ",i);
    cantidadFrutas += frutos;
}

console.log("cantidad de km de frutas cosechadas en 5 arboles:", cantidadFrutas);

