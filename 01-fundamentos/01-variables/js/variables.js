//1. Variables con let (pueden cambiar)
let name="Ana";
let age=25;
let learningJavaScript=true;

console.log("Variables con let:");
console.log("Nombre: ", name);
console.log("Edad: ", age);
console.log("¿Estás aprendiendo JavaScript? ", learningJavaScript);


//2. Variables con const (NO puenden cambiar)
const pais="España";
const anioNacimiento=2002;

console.log("Variables con const:");
console.log("Pais: ", pais);
console.log("Año de nacimiento: ", anioNacimiento);

//3. Tipos de datos
console.log("\n-- Tipos de datos --");
console.log("String (texto): ", typeof name);
console.log("Number (número): ", typeof age);
console.log("Boolean (booleano): ", typeof learningJavaScript);
console.log("Undefined (sin definir): ", typeof variableNoDefinida);
console.log("Null (nulo): ", typeof null);

//4. Ejemplo práctico: presentación personal
console.log("\n-- Presentación --");
console.log(`Hola, me llamo ${name}, tengo ${age} años y soy de ${pais}`);