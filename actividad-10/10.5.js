const a = [1, 2, 3]
const b = ['a', 'b', 'c']

// Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una
function combinesLists(listA, listB) {
    let resultado = []
    for (let i = 0; i < listA.length; i++) {
        resultado.push(listA[i])
        resultado.push(listB[i])
    }
    return resultado
}

console.log(a);
console.log(b);
console.log(combinesLists(a, b))