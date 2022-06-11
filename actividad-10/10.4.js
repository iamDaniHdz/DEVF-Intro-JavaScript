// Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir 
// y el valor sea las ocurrencias que encontró dentro de ese arreglo. 
const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];

function sorter(arr) {
    let element = []
    const newArray = {}
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (!element.includes(arr[i])) {
            element.push(arr[i])
            let num = arr.filter(item => item == arr[i])
            Object.defineProperty(newArray, element[j], {
                value: num.length,
                writable: true,
                enumerable: true,
            })
            j++
        }
    }
    return (newArray)
}
console.log(sorter(arr))