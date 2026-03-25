// creamos variables
let numSecret = Math.floor(Math.random() * 20) + 1;
let intentos = 0;
let numUsu; // declaramos la variable fuera para usarla en la condición

// empezamos con la apertura
do {
    numUsu = parseInt(prompt("Introduzca un número:"));
    intentos++; //incrementará cada vez que se entre al bucle.

    if (numUsu > numSecret) {
        alert("El número es menor. Vuelve a intentarlo");
    } else if (numUsu < numSecret) {
        alert("El número es mayor. Vuelve a intentarlo");
    }
} while (numUsu !== numSecret); // Mientras sean diferentes, sigue el bucle

document.write(`¡Felicidades! Adivinaste el número ${numSecret} en ${intentos} intentos.`);