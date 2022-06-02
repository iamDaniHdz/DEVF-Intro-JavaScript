let player1 = prompt("Nombre del jugador 1");
let player2 = prompt("Nombre del jugador 2");

let choicePlayer1 = prompt("Jugador 1 elige: Piedra, Papel o Tijera")
let choicePlayer2 = prompt("Jugador 2 elige: Piedra, Papel o Tijera")

if (choicePlayer1 == "Piedra" && choicePlayer2 == "Piedra") {
    alert("Empate");
} else if (choicePlayer1 == "Piedra" && choicePlayer2 == "Papel") {
    alert("El ganador es: " + player2);
} else if (choicePlayer1 == "Piedra" && choicePlayer2 == "Tijera") {
    alert("El ganador es: " + player1);
} else if (choicePlayer1 == "Papel" && choicePlayer2 == "Piedra") {
    alert("El ganador es: " + player1);
} else if (choicePlayer1 == "Papel" && choicePlayer2 == "Papel") {
    alert("Empate");
} else if (choicePlayer1 == "Papel" && choicePlayer2 == "Tijera") {
    alert("El ganador es: " + player2);
} else if (choicePlayer1 == "Tijera" && choicePlayer2 == "Piedra") {
    alert("El ganador es: " + player2);
} else if (choicePlayer1 == "Tijera" && choicePlayer2 == "Papel") {
    alert("El ganador es: " + player1);
} else if (choicePlayer1 == "Tijera" && choicePlayer2 == "Tijera") {
    alert("Empate");
} else {
    alert("Uy algo salió mal!"); 
}