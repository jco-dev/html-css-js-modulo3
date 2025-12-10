// 1,2,3,4,5 //
// ["juan", "carlos", "sandra"];

// for clásico
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

// do while (ejecta al menos una vez)
let contador2 = 1;

do {
    console.log(contador2);
    contador2++;
} while (contador2 <= 5);


// For of (arrays)
let colores = ["rojo", "verde", "azul"];

for(let color of colores) {
    console.log(color);
}

console.log(colores.length);


// For i
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}
