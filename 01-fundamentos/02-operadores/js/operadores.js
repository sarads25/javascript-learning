//Operadors en JavaScript

console.log("Operadores Aritméticos");

let a=10;
let b= 3;

console.log("a=", a, "b=, b");
console.log("Suma (a + b):", a + b);           // 13
console.log("Resta (a - b):", a - b);           // 7
console.log("Multiplicación (a * b):", a * b);   // 30
console.log("División (a / b):", a / b);         // 3.3333...
console.log("Módulo (a % b):", a % b);           // 1 (resto de la división)
console.log("Exponenciación (a ** b):", a ** b); // 10³ = 1000

console.log("\n"); //salto de línea

console.log("Operadores de Comparación");

console.log("5 == '5':", 5 == '5');        // true (compara valor, NO el tipo)
console.log("5 === '5':", 5 === '5');      // false (compara valor Y tipo)
console.log("5 != '5':", 5 != '5');        // false
console.log("5 !== '5':", 5 !== '5');      // true

console.log("10 > 5:", 10 > 5);            // true
console.log("10 < 5:", 10 < 5);            // false
console.log("10 >= 10:", 10 >= 10);        // true
console.log("10 <= 5:", 10 <= 5);          // false

console.log("\n");

console.log("Operadores Lógicos");

let esMayorDeEdad = true;
let tienePermiso = false;

console.log("AND (&&):", esMayorDeEdad && tienePermiso);     // false
console.log("OR (||):", esMayorDeEdad || tienePermiso);      // true
console.log("NOT (!):", !esMayorDeEdad);                     // false

// Ejemplo práctico: Acceso a un sitio web
let edad = 18;
let tieneCarnet = true;
let esConductor = edad >= 18 && tieneCarnet;
console.log("¿Puede conducir?", esConductor);  // true

console.log("\n");

console.log("Operadores de Asignación");

let x = 5;
console.log("x =", x);

x += 3;  // x = x + 3
console.log("x += 3:", x);  // 8

x -= 2;  // x = x - 2
console.log("x -= 2:", x);  // 6

x *= 4;  // x = x * 4
console.log("x *= 4:", x);  // 24

x /= 3;  // x = x / 3
console.log("x /= 3:", x);  // 8

x %= 3;  // x = x % 3
console.log("x %= 3:", x);  // 2

console.log("\n");

console.log("Ejercicios Prácticos");

console.log("\n-- Control de edad cine --");

let edadPersona=16;
let peliAdultos=18;
let acompanadoPorAdulto=true;

let puedeEntrar=(edadPersona>=peliAdultos) || acompanadoPorAdulto;
console.log("Edad: ", edadPersona);
console.log("¿Acompañado por adulto?", puedeEntrar);
console.log("¿Puede entrar a la pelicula?", puedeEntrar);

//Ejercicio 3: Par o impar
console.log("\n-- Par o Impar --");
let numero= 7;
let esPar= numero%2===0;
console.log("El número ", numero, "es", esPar ? "PAR" : "IMPAR"); // condicion ? "valor si es verdadero" : "valor si es falso"

//Ejercicio 4: Conversión de temperatura
console.log("\n-- Conversor de Temperatura --");
let celsius=25;
let fahrenheit= (celsius*9/5) + 32;
let kelvin=celsius+273.15;

console.log(celsius + "C = " + fahrenheit + "F");
console.log(celsius + "C = " + kelvin + "K");