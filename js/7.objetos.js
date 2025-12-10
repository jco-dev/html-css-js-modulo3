let usuario = {
    nombre: "Juan Carlos",
    edad: 30,
    email: "juan.carlos@example.com",
    saludar: function(){
        return "Hola, soy " + this.nombre;
    }
};

// acceder a sus propiedades
console.log(usuario.nombre);
console.log(usuario['edad']);

// agregar/modificar propiedad
usuario.telefono = "123-456-7890";
console.log(usuario.telefono);
usuario.edad = 28;
console.log(usuario);

 // métodos
 let llaves = Object.keys(usuario);
 console.log(llaves);

 let valores = Object.values(usuario);
 console.log(valores);

 let entradas = Object.entries(usuario);
 console.log(entradas);
 
 
 

