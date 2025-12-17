// copiar arrays
let original = [1, 2, 3];
console.log(original);
let copia = [...original];
console.log(copia);

// combinar arrays
let array1 = [1, 2];
let array2 = [3, 4];
let combinado = [...array1, ...array2];

console.log(array1, array2);
console.log(combinado);

// copiar objectos  

let obj1 = {a: 1, b: 2};
let compiado = {...obj1};

// Combinar objectos
let obj2 = {c: 3, d: 4};
let combinadoObj = {...obj1, ...obj2};
console.log(combinadoObj);




