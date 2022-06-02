let number1 = Number(prompt("Ingresa el primer número"));
let number2 = Number(prompt("Ingresa el segundo número"));
let number3 = Number(prompt("Ingresa el tercer número"));

if (number1 == number2 && number1 == number3) {
    console.log("Los tres números son iguales");
} else if (number1 > number2 && number1 >= number3) {
    console.log(number1 + " es el número mayor");
} else if (number2 >= number1 && number2 >= number3) {
    console.log(number2 + " es el número mayor");
} else if (number3 > number1 && number3 > number2) {
    console.log(number3 + " es el número mayor");
} else {
    console.log("Uy algo salio mal");
}