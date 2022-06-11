// Del siguiente arreglo:
const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12]
const coleccion = [{
        a: 11,
        b: 224,
        name: "M48 Bulldog"
    },
    {
        a: 23,
        b: 56,
        name: "Object 140"
    },
    {
        a: 32,
        b: 75,
        name: "T57 Heavy"
    }
];

// Escriba una función de JavaScript que tomará una serie de números almacenados
// y encontrará el segundo número más bajo y segundo número más altos, respectivamente
function findLowestHighestNumbers() {
    secondLowestNumber = arr.sort(function (a, b) {
        return a - b
    })[1];
    secondHighestNumber = arr.sort(function (a, b) {
        return b - a
    })[1];

    console.log(`El segundo número mas pequeño es: ${secondLowestNumber}`);
    console.log(`El segundo número mas grande es: ${secondHighestNumber}`);
}

findLowestHighestNumbers();