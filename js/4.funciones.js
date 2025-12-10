
// let suma = 4 + 4;
// console.log(suma);

// suma = 10 + 8;
// console.log(suma);

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(4, 4);
console.log(resultado);

resultado = sumar(10, 8);
console.log(resultado);

// función tradicional //
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar("Juan Carlos"));
console.log(saludar("María"));

// funciones con parámetros por defecto //
function multiplicar(a, b = 2) {
    return a * b;
}

console.log(multiplicar(6, 3));
console.log(multiplicar(6));

// Expresión de función
const sumar1 = function (a, b) {
    return a + b;
}

// Función de flecha //
const restar = (a, b) => {
    return a - b;
}

console.log(restar(10,5));

// Función de flecha simplicada
const multiplicar1 = (a, b = 2) => a * b;








