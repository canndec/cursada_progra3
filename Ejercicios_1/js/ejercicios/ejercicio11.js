/*
    Generar una tabla de multiplicar del 1 al 3 con bucles for anidados.
*/

for(let i = 1;i<=3;i++){
    console.log("\ntabla del ",i);
    for(let j = 1; j<=10;j++){
        console.log(i,"*",j,"=", i*j);
    }
}