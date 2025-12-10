let numeros = [1,2,3,4,5];

// agregar elementos //
numeros.push(6);
numeros.unshift(0);

// eliminar elementos
numeros.pop();   // elimina el último
numeros.shift(); // elimina el primero

// Búsqueda
let indice = numeros.indexOf(3);
let exite = numeros.includes(400);
console.log(exite);

// extraer porciones 
let porcion = numeros.slice(1, 4);  
console.log(porcion);

// unir arrays
let mas = [6,7,8];
let completo = numeros.concat(mas);
console.log(completo);

// Métodos avanzados 

let productos = [
    {nombre: "Laptop", precio: 800},
    {nombre: "Mouse", precio: 20},
    {nombre: "Teclado", precio: 50},
];

// map: transformar cada elemento
let nombres = productos.map(producto => producto.nombre)

console.log(nombres);

// filter: filtra elementos que cumplan una condición
let productosCaros = productos.filter(producto => producto.precio > 100);

console.log(productosCaros);

// find: buscar el primer elemento que cumple la condición
let laptop = productos.find(producto => producto.nombre === "Laptop");
console.log(laptop);

// reduce: reduce array aun solo valor
let totalPrecio = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(totalPrecio);


// forEach: ejectua function para cada elemento
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio} Bs.`);
});

// some: verifica si alguno cumple
let hayBarato = productos.some(producto => producto.precio < 30);
console.log(hayBarato);

// every: verifica si todos cumplen
let todosMenor1000 = productos.every(producto => producto.precio < 1000);
console.log(todosMenor1000);






