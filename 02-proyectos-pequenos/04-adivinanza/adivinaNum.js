/*PROYECTO 4: ADIVINA EL NÚMERO

Crea un juego donde el programa genera un número secreto y el jugador intenta adinarlo

Datos de entrada:
 - Intengo -> El número que el jugador cree que es el secreto
 - Intentos restantes -> Empieza en 3 intentos
 - Número secreto -> Lo genera automáticamente el programa
 
 Reglas del juego:
 
 1. El programa genera un número aleatorio entre 1 y 10
 2. El jugador hace un intento
 3. Si acierta -> Mensaje de felicitación
 4. Si no acierta:
      - Decir si el número secreto es MAYOR o MENOR que el intento
      - Restar 1 intento
      - Si aún quedan intentos, mostrar cúantos quedan
      - Si se quedan sin intentos -> "Game Over" y mostrar el número secreto*/

let numero=8;
let numerSecreto=Math.floor(Math.random()*10)+1;
let intentos=7;
let intentosRestantes=3;

if(numero===numerSecreto){
    console.log("Lo adivinaste!");
}else if(numero>numerSecreto){
    console.log("El número secreto es menor");
    intentosRestantes--;
    console.log("Intentos restantes: ", intentosRestantes)
}else{
    console.log("El número secreto es mayor");
    intentosRestantes--;
    console.log("INtentos restantes: ", intentosRestantes);
}