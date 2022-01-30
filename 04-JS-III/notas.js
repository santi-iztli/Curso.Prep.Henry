//Arrays ó Arreglos
//Los array son una lista de elementos.
//Los elementos pueden ser de los tipos de datos que vimos antes: Number, String, boleano, null ó undefined.
//arrays es escriven dentro de []: [1, 2, 3] ó ['yago', 'zazu', 'morris']

var arreglo = [1, 2, 3, 4, 5];

//pueden aceptar todos los tipos datos

var otroarreglo = [1, 2, 'Hola', null, undefined];

// Inclisive pueden tener un elemento que sea un arreglo 

var arregloAdentro = [1, 2, 'chao', [2, 3, 'hola'];



        //Introducción a los arrays (matrices/arreglos)


        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel']; //esto es una array 

        //.length

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel']; //esto es una array

        console.log(nombresEstudiantes.length); // 4

        //ejemplo para acceder al elemento 1 'Antonio'.

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel']; //esto es una array

        console.log(nombresEstudiantes[1]); // 'Antonio'


        //Asignación
        //Podemos asignar y reasignar cualquier índice en la matriz usando el paréntesis/índice y un “=”.

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel']; //esto es una array

        nombresEstudiantes[0] = 'Jorge';

        console.log(nombresEstudiantes); // ['Jorge', 'Antonio', 'Sara', 'Samuel']

        //-------------------------------------------------
        //.push y .pop
        //Otros dos métodos de matriz incorporados muy útiles son .push y .pop. Estos métodos se refieren a la adición y eliminación de elementos de la matriz después de su declaración inicial.

        //.push agrega un elemento al final de la matriz, incrementando su longitud en 1. .push devuelve la nueva longitud.

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel']; //esto es una array

        nombresEstudiantes.push('Patricia');

        console.log(nombresEstudiantes); // ['Martin', 'Antonio', 'Sara', 'Samuel', 'Patricia']

        //.pop elimina el último elemento de la matriz, disminuyendo la longitud en 1. .pop devuelve el elemento “reventado” (popped).

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel']; //esto es una array

        nombresEstudiantes.pop();

        console.log(nombresEstudiantes); // ['Martin', 'Antonio', 'Sara']

        //----------------------------------------------------

        //.unshift y .shift
        //.unshift y .shift son exactamente como .push y .pop, excepto que operan en el primer elemento de la matriz. .unshift(item) colocará un nuevo elemento en la primera posición de la matriz, y .shift() eliminará el primer elemento de la matriz.

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

        nombresEstudiantes.unshift('Leo');

        console.log(nombresEstudiantes); // ['Leo', 'Martin', 'Antonio', 'Sara', 'Samuel']

        nombresEstudiantes.shift();

        console.log(nombresEstudiantes); // ['Martin', 'Antonio', 'Sara', 'Samuel']

        //-------------------------------------------------------

        //Utilizando bucles for en arrays
        //La mayoría de las veces, los bucles for se utilizan para iterar sobre todos los elementos de una matriz. Usando la técnica de acceso al índice (“index access technique”) podemos acceder a cada elemento de la matriz. Para hacer esto, usamos el método .length como punto de parada para el ciclo.

        const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

        for (let i = 0; i < nombresEstudiantes.length; i++) {
            console.log(nombresEstudiantes[i]);
        }

        // 'Martin'
        // 'Antonio'
        // 'Sara'
        // 'Samuel'