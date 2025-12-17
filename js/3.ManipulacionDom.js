// Seleccionar ID
let titulo = document.getElementById("titulo");
console.log(titulo);

// Seleccionar por Clase
let botones = document.getElementsByClassName("btn");
console.log(botones);

// seleccionar por etiqueta
let parrafo = document.getElementsByTagName("p");
console.log(parrafo);


// query selector (más moderno)
let primerBoton = document.querySelector(".btn");
console.log(primerBoton);

let todos = document.querySelectorAll(".btn");
console.log(todos);

// MODIFICAR ELEMENTOS
titulo.textContent = "Nuevo título";
titulo.innerHTML = "Nuevo <em>título</em>" ;

// cambiar estilos 
titulo.style.color = "blue";
titulo.style.backgroundColor = "yellow";

// agregar o quitar clases
titulo.classList.add("nueva-clase");
titulo.classList.remove("nueva-clase");

// crear y agregar elementos 
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo.";
document.body.appendChild(nuevoParrafo);

// EVENTOS //
let miBoton = document.querySelector("#miBoton"); 

// miBoton.addEventListener("click", function() {
//     alert("¡Botón clickeado!");
// });

// arrow function
// miBoton.addEventListener("click", () => {
//     console.log("¡Botón clickeado con arrow function!");
// });

// evento con parámetro
miBoton.addEventListener("click", (event) => {
    console.log(event.target);
});

let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulario");
    
});

let input = document.querySelector("#nombre");
input.addEventListener("input", (event) => {
    console.log(event.target.value);
    
});