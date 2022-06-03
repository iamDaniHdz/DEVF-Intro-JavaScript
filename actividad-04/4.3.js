let number = Number(prompt("Ingrese un número"));
let baseNumber = 0;

do {
    baseNumber++;
    if(baseNumber % 5 == 0){
        console.log(baseNumber);
    }
} while (number>baseNumber);