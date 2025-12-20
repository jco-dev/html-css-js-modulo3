let todosLosPersonajes = [];
let personajesFiltrados = [];
let paginaActual = 1;
let urlPaginaSiguiente = null;
let urlPaginaAnterior = null;
let totalPaginas = 1;

// Funcion principal: cargar personajes desde la API
async function cargarPersonajes(url = 'https://thesimpsonsapi.com/api/characters') {
    mostrarCargando(true);
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        todosLosPersonajes = datos.results;
        personajesFiltrados = todosLosPersonajes;
        urlPaginaSiguiente = datos.next || null;
        urlPaginaAnterior = datos.previous || null;
        totalPaginas = datos.pages

        if (url.includes('page=')) {
            paginaActual = parseInt(url.match(/page=(\d+)/)[1]);
        } else {
            paginaActual = 1;
        }

        mostrarPersonajes();
        actualizarBotonesPaginacion();

    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }
    mostrarCargando(false);
}

function mostrarCargando(mostrar)
{
    document.getElementById('cargando').style.display = mostrar ? 'block' : 'none';
    document.getElementById('cuadriculaPersonajes').style.display = mostrar ? 'none' : 'grid';
}

function mostrarPersonajes() 
{
    const cuadricula = document.getElementById('cuadriculaPersonajes');
    cuadricula.innerHTML = '';

    if(personajesFiltrados.length === 0) {
        cuadricula.innerHTML = '<p>No se encontraron personajes.</p>';
        return;
    }

    personajesFiltrados.forEach(personaje => {
        const tarjeta = crearTarjetaPersonaje(personaje);
        cuadricula.appendChild(tarjeta);
    });

}

function crearTarjetaPersonaje(personaje)
{
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-personaje';
    tarjeta.onclick = () => mostrarModalPersonaje(personaje.id);

    const urlImagen = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
    const claseEstado = personaje.status === 'Alive' ? 'estado-vivo' : 'estado-fallecido';
    const estadoTexto = personaje.status === 'Alive' ? 'Vivo' : 'Fallecido';
    const primeraFrase = personaje.phrases.length > 0 ? personaje.phrases[1] : 'Sin frases disponibles';

    tarjeta.innerHTML = `
        <div class="enlace-tarjeta-personaje">
            <div class="encabezado-personaje">
                <div class="envoltorio-imagen-personaje">
                    <div class="contenedor-imagen-personaje">
                        <img src="${urlImagen}"
                             alt="${personaje.name}"
                             class="imagen-personaje"
                             loading="lazy">
                    </div>
                </div>
                <div class="nombre-personaje">${personaje.name}</div>
                <div class="ocupacion-personaje">${personaje.occupation}</div>
            </div>
            <div class="pie-personaje">
                <div class="contenedor-insignias">
                    ${personaje.age ? `<div class="insignia insignia-edad">Edad: ${personaje.age} años</div>` : ''}
                    <div class="insignia insignia-estado ${claseEstado}">${estadoTexto}</div>
                </div>
                <div class="frase-personaje">"${primeraFrase}"</div>
            </div>
        </div>
    `;

    return tarjeta;
}

function buscarPersonaje(){
    const terminoBusqueda = document.getElementById('entradaBusqueda').value.toLowerCase();
    if(terminoBusqueda.trim() === '') {
        personajesFiltrados = todosLosPersonajes;
    } else {
        personajesFiltrados = todosLosPersonajes.filter(personaje =>
            personaje.name.toLowerCase().includes(terminoBusqueda)
        );
    }

    mostrarPersonajes();
}

function paginaSiguiente()
{
    if (urlPaginaSiguiente) {
        cargarPersonajes(urlPaginaSiguiente);
        window.scrollTo(0, 0);
    }
}

function paginaAnterior(){
    if (urlPaginaAnterior) {
        cargarPersonajes(urlPaginaAnterior);
        window.scrollTo(0, 0);
    }   
}


function cargarTodosLosPersonajes()
{
    document.getElementById('entradaBusqueda').value = '';
    document.getElementById('filtroGenero').value = '';
    document.getElementById('filtroEstado').value = '';
    cargarPersonajes();

}

function actualizarBotonesPaginacion()
{
    document.getElementById('botonAnterior').disabled = !urlPaginaAnterior;
    document.getElementById('botonSiguiente').disabled = !urlPaginaSiguiente;
    document.getElementById('paginaActual').textContent = paginaActual;
    document.getElementById('totalPaginas').textContent = totalPaginas;
}

cargarPersonajes();