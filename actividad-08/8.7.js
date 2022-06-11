// Crea un código para llenar un objecto vacio:
const objeto = {}

/*
Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
*/

Object.defineProperties(objeto, {
    color: {
        enumerable: true,
        value: "azul",
        writable: true
    },
    tamaño: {
        enumerable: true,
        value: "1.5m",
        writable: true
    },
    peso: {
        enumerable: true,
        value: '5kg',
        writable: true
    },
    cantidad: {
        enumerable: true,
        value: '100',
        writable: true
    }
})

console.log(objeto);