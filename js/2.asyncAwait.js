// async
async function saludo() {
    return "Hola";
}

//saludo().then(console.log);


//await
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
    console.log("Inicio");
    await esperar(2000);
    console.log("Fin después de 2 segundos");
}

ejecutar(); 

// Uso común
async function obtenerPersonajes()
{
    try {
        
        let respuesta = await fetch("https://rickandmortyapi.com/api/character");
        let personajes = await respuesta.json();
        console.log(personajes);

    } catch (error) {
       console.log("Error al obtener personajes:", error) 
    }
}

obtenerPersonajes();