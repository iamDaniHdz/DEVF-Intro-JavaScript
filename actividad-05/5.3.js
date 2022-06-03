let empty=[]
let contador = 1

while (contador<=5) {
    let value = Number(prompt("Ingrese un número"));
    empty.push(value)
    contador++
}

console.log(empty);

let newNumbers = empty.sort(function (a, b) {
    return a - b
});

for (let i = 0; i < newNumbers.length; i++) {
    console.log(newNumbers[i]);
}