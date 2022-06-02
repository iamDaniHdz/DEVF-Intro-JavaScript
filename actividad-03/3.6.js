let number1 = Number(prompt("Ingresa un número"));
let number2 = Number(prompt("Ingresa otro número"));

if (number1 > number2) {
    console.log(number1 + " es mayor que " + number2);
} else if (number2 > number1){
    console.log(number2 + " es mayor que " + number1);
} else if (number1 == number2){
    console.log(number1 + " es igual a " + number2);
} else {
    console.log("Uy algo salio mal");
}