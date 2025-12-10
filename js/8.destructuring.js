// desestructurar objetos

// Con objetos
let persona = {
    nombre: "Juan Carlos",
    edad: 30,
    email: "juan.carlos@example.com"
};

let { nombre, edad, email } = persona;
console.log(nombre, edad); 

// con arrays
let numeros = [1, 2, 3, 40, 5];

let [primero, segundo, tercero, cuarto] = numeros;
console.log(primero, segundo, tercero, cuarto);


// con valores por defecto
let  { nombre: nom, pais = "Bolivia" } = persona;
console.log(nom, pais);
