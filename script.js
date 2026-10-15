
function getComputerChoice() {
    // 1. Math.random() es una función que inventa un número decimal entre 0 y 1 (ej: 0.15, 0.50, 0.92)
    const randomNumber = Math.random();

    // 2. Imaginemos que dividimos la regla del 0 al 1 en tres partes iguales:
    if (randomNumber < 0.34) {
        return "piedra";// Si el número es menor a 0.34, eligió piedra
    } else if (randomNumber < 0.67) {
        return "papel";// Si el número está entre 0.34 y 0.67, eligió papel
    } else {
        return "tijeras"; // Si es mayor, eligió tijeras
    }

}




function getHumanChoice() {
    // 1. prompt() abre una ventanita en el navegador que te pide escribir algo
    let userInput = prompt("Elige: piedra, papel o tijeras");

    // 2. ¿Qué pasa si le das al botón "Cancelar"? prompt() devuelve un valor nulo (null).
    // Esto es un "candado de seguridad" para que el programa no falle si cancelas:
    if (userInput === null) {
        return "";
    }

    // 3. ¿Y si escribes "PIEDRA" en mayúsculas o con espacios " piedra "?
    // .trim() borra los espacios sobrantes y .toLowerCase() lo pasa todo a minúsculas.
    return userInput.trim().toLowerCase();
}




function playGame() {
   // Creamos dos variables para llevar los puntos. Empiezan en 0.
    let humanScore = 0;
    let computerScore = 0;

    
    function playRound(humanChoice, computerChoice) {
        // Si no escribiste nada o cancelaste, avisa y se sale de la ronda
        if (!humanChoice) {
            console.log("Entrada vacía o juego cancelado.");
            return;
        }

        // Muestra en la consola qué eligió cada quien
        console.log(`Tu elección: ${humanChoice} | Computadora: ${computerChoice}`);

        // CASO 1: Si ambos eligen lo mismo -> EMPATE
        if (humanChoice === computerChoice) {
            console.log("¡Empate en esta ronda!");

            // CASO 2: Si gana el humano (agrupamos las 3 formas de ganar con el símbolo || que significa "O")
        } else if (
            (humanChoice === "piedra" && computerChoice === "tijeras") ||
            (humanChoice === "papel" && computerChoice === "piedra") ||
            (humanChoice === "tijeras" && computerChoice === "papel")
        ) {
            console.log(`¡Ganaste la ronda! ${humanChoice} vence a ${computerChoice}`);
            humanScore++; // Sumamos 1 punto al humano

            // CASO 3: Si no fue empate y no ganó el humano, por lógica gana la computadora
        } else {
            console.log(`¡Perdiste la ronda! ${computerChoice} vence a ${humanChoice}`);
            computerScore++;  // Sumamos 1 punto a la computadora
        }

        // Muestra cómo va el marcador actual
        console.log(`Marcador -> Humano: ${humanScore} | Computadora: ${computerScore}\n`);
    }

   // Empieza en la ronda 1 (i = 1), y se repite mientras i sea menor o igual a 5 (i <= 5)
    for (let i = 1; i <= 5; i++) {
        console.log(`--- RONDA ${i} ---`);

        // Llamamos a las funciones que hicimos antes para conseguir opciones NUEVAS en cada ronda
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // Ejecutamos la pelea de esta ronda
        playRound(humanSelection, computerSelection);
    }

    // Declaración del ganador final al terminar las 5 rondas
    console.log("===============================");
    console.log("       ¡FIN DEL JUEGO!         ");
    console.log("===============================");
    console.log(`Puntuación final -> Humano: ${humanScore} | Computadora: ${computerScore}`);


    // Comparamos los puntos totales
    if (humanScore > computerScore) {
        console.log("🏆 ¡Felicidades! Ganaste la partida completa.");
    } else if (computerScore > humanScore) {
        console.log("🤖 Lo siento, la computadora ganó la partida.");
    } else {
        console.log("🤝 ¡El juego terminó en un empate absoluto!");
    }
}

// Para arrancar el juego completo, simplemente ejecutas esta función:
playGame();