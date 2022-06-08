const toFarenheit=(celsius)=>{
    alert(celsius + "°C= "+ ((celsius * 9/5) + 32) + "°F")
}

const toCelsius=(farenheit)=>{
    alert(farenheit + "°F= "+ ((farenheit - 32) * 5/9) + "°C")
}

let option = Number(prompt("1 Para convertir de Celsius a Farenheit\n2 Para convertir de Farenheit a Celsius"))

switch (option) {
    case 1:
        let celsius = prompt("Ingresa grados Celsius")
        toFarenheit(celsius)
    break;
    case 2:
        let farenheit = prompt("Ingresa grados Farenheit")
        toCelsius(farenheit)
    break
    default:
        console.log("Uy algo salio mal");
    break;
}   