let edad = 8;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// if else
let temperatura = 21;

// if(temperatura > 30)
// {
//     console.log("Hace mucho calor");
// } else {
//     console.log("La temperatura es agradable");
// }

if (temperatura > 30) {
    console.log("Hace mucho calor");
} else if (temperatura > 20) {
    console.log("Clima agradable");
} else {
    console.log("Hace frío");
}


// operador ternario
temperatura = 45;

let mensaje = (temperatura > 30) ? "Hace mucho calor" : "La temperatura es agradable";
console.log(mensaje);

// switch
let dia = "viernes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Casi fin de semana");
        break;
    default: 
        console.log("Es un día cualquiera");

}
