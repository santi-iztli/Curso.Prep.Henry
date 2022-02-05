// Bucles FOR (Funciones repetitibas)

//imprime una lista del 1 al 100
for (var i = 0; i <= 100; i++) {
    console.log(i)
}

//imprime n
function imprime1aN(n) {
    for (var i = 0; i <= n; i++) {
        console.log(i);
    }
}

//imprime solo numeros pares hasta 200 y luego J hasta 9
//Ejempro de Bucle anidado
function imprime1aN(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
        if (i > 200) {
            for (var j = 0; j < 10; j++) {
                console.log(j);
            }
            return;
        }
    }
}

//Ejempro de Bucle anidado
// Matriz
// n filas
// m columnas
function matriz(n, m) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            console.log(i + ',' + j)
        }
    }
}

//    0 1 2 3

// 0  1 2 3 4
// 1  5 6 7 8
// 2  9 1 2 3

// Bucle While

while (unaCondicion) {
    // corre algun codigo
}

//Ejempro de como podemos imprimir los numero del 1 al 5 utilizando un while loop

while (count < 6) {
    console.log("count es: " + count)
    count++
}

var i = 0;
while (i < 100) { // consicion
    console.log(i); //console.log, imprime en consola
    i++; //paso
}

function matriz(n, m) {
    var j = 0;
    var i = 0;
    while (i < n) {
        while (j < m) {
            console.log(i, j);
            j = j + 1;
        }
        j = 0;
        i = i + 1;
    }
}

>
matriz(2, 3)
0 0
0 1
0 2
1 0
1 1
1 2