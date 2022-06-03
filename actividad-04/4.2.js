let number = Number(prompt("Ingrese un número"));
let baseNumber = 0;

while (number>baseNumber) {
    baseNumber++;
    if(baseNumber % 5 == 0){
        console.log(baseNumber);
    }
}