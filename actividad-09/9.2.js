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

// Hacer una función para que reciba ese arreglo de objetos y que retorne 
// la suma de "a" y "b" de cada objeto y concatenarlo al String "name"

function sumaPropArrays(objects) {
    result = objects.map(function (propertie) {
        return String(propertie.a + propertie.b) + " " + propertie.name;
    });

    console.log(result);
}

console.log(sumaPropArrays(coleccion));