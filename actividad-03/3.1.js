let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"));

if (edad >= 18 && nombre != "Mario" && nombre != "Carlos") {
    console.log("Puedes ingresar a la discoteca");
} else if (edad < 18) {
    console.log("No puedes ingresar a la discoteca");
} else if (nombre == "Mario" || nombre == "Carlos" && edad >= 18) {
    console.log("Puedes ingresar a VIP");
}