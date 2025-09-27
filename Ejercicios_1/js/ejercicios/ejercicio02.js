// Convertir grados Celsius a Fahrenheit. Pedir por prompt los grados celsius.
// c a f °C = (°F - 32) × 5/9
// c a f  c *1,8 + 32
let gradosCelsius = prompt("ingrese los grados celsius");
let gradosFahrenheit = 30;

console.log("grados celcius: ",);

const calculoCaF = (gradosFahrenheit - 32) * 5/9;
const calculoFaC = gradosCelsius * 1.8 + 32;
console.log("grados C a F: ",calculoCaF)
console.log("grados F a C: ", calculoFaC);

