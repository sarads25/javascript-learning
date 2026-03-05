/*ARRAYS (LISTAS)

- Lista ordenada de elementos (piensa en una estantería con cajas numeradas)
*/

//Crear arrays
let frutas=["manzana", "pera", "plátano", "mandarina"];
let nmeros=[1,2,3,4,5,6,7];
let mixto=["hola", 25, true, null, ["otro","array"]];

console.log(frutas);
console.log(nmeros);
console.log(mixto);

//¿Cómo accedemos a los elementos? - los arrays empiezan en posición 0

console.log(frutas[0]); //manzana
console.log(frutas[1]); //pera
console.log(frutas[2]); //platano
console.log(frutas[3]); //mandarina
console.log(frutas[4]); //undefined no existe

//length (longitud)
console.log("El array tiene ", frutas.length, "elementos"); //4
console.log("Último elemento", frutas[frutas.length - 1]); //"naranja"

//2. RECORRER ARRAYS
//Método tradicional (for)

let libros=["Trono de cristal", "ACOTAR", "El susurrador", "Mujercitas"];

for(let i=1; i<libros.length;i++){
    console.log("Posición", i, "-", libros[i]);
}


//Método más moderno for...of
for(let libro of libros){
    console.log("Libros: ", libro);
} //no tenemos acceso al indice (posición)


//Método para índices for...in
for(let indice in libros){
    console.log("Índice: ", indice, "- Valor: ", libros[indice]);
}

//Método forEach
libros.forEach(function(libro,indice){
    console.log("Posición", indice, "-", libro);
});

// versión con arrow function
frutas.forEach((fruta, indice) => {
    console.log(`Posición ${indice}: ${fruta}`);
});

// Recorrer con for tradicional
for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    console.log(`${estudiante.nombre} - ${estudiante.edad} años - Nota: ${estudiante.nota}`);
}

// Recorrer con for...of (más limpio)
console.log("Con for..of");
for (let estudiante of estudiantes) {
    console.log(`${estudiante.nombre}: ${estudiante.nota}`);
}

// Recorrer con forEach
console.log("Con forEach");
estudiantes.forEach((estudiante, i) => {
    console.log(`${i + 1}. ${estudiante.nombre} - Nota: ${estudiante.nota}`);
});

//--------------------------------------------------------------------------

/*OBJETOS - Colección de propiedades con nombre. Piensa en una ficha con etiquetas*/

//Crear un objeto
let persona={
    nombre: "Sara",
    edad:23,
    ciudad: "Madrid",
    estudiante: true
};

console.log(persona);

//Acceder a propiedades
console.log(persona.nombre);
console.log(persona.edad);

//forma 2: corchetes (cuando el nombre tiene espacioes o es variable)
console.log(persona["ciudad"]);


let propiedad="nombre";
console.log(persona[propiedad]); //Ana (útil cuando no sabes la propiedad)

//Añadir y modificar propiedades
let alguien={
    nombre:"Leire"
};

//Añadir
alguien.edad=20;
alguien["ciudad"]="Madrid";

//Modificar
alguien.nombre="Leire Doral";

console.log(alguien);

//Recorrer objetos -> for...in

for(let clave in persona){
    console.log(clave + ":", persona[clave]);
}

//Obtener las claves
let claves=Object.keys(persona);
console.log("Claves", claves); //["nombre", "edad", "ciudad"]

for(let i=0;i<claves.length;i++){
    let clave=claves[i];
    console.log(clave + ":", persona[clave]);   
}

//Obtener los valores
let valores=Object.values(persona);
console.log("Valores: ", valores); //["Ana", 25, "Madrid"]

for(let i=0;i<valores.length;i++){
    console.log("Valor", i + ":", valores[i]);
}

//Object.entries() - Clave y valor juntos
let entradas=Object.entries(persona);
console.log("Entradas: ", entradas); // [["nombre", "Ana"],["edad", 25], ["ciudad", "Madrid"]]

for(let i=0;i<entradas.length;i++){
    let clave=entradas[i][0];
    let valor=entradas[i][0];
    console.log(clave + ":", valor);
}
