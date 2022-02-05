// Objetos
// JavaScript está diseñado sobre un paradigma simple basado en objetos.Un objeto es una colección de propiedades,y una propiedad es una asociación entre un nombre(ó clave) y un valor.

// Objeto literal, se escribe de la siguiente forma:

var objeto = {
    propiedad1: valor1,
    ...
    propiedadN: valor2,
}

Ejemplo:

    var santi = {
        nombre: 'Santi',
        apellido: 'Morera',
        edad: 29,
        cursando: true,
        saludar: function() {
            console.log('hola Santi!');

        },
        hobbies: ['escalar', 'programar', 'escuchar musica'],
    }

// como acceder a las propiedades string:
santi['edad']
    //como invovar una funcion con () despues de ['']:
santi['saludar']()


console.log(objeto.propiedades); //Dot Notation
objeto.propiedad //Dot notation

console.log(objeto['propiedad']); //Bracket notation
objeto['propiedad'] // Bracket notation

//Asignacion de valores 

santi.nuevaPropiedad = 1;
objeto['otraPropiedad'] = 'nombre';

//eliminando propiedades

delete objeto.propiedad;