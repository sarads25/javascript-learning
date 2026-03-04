/* PROYECTO 2: ORIENTACIÓN VOCACIONAL

Recomienda una carrera según los intereses del usuario.

Datos de entrada (valores del 1 al 10)
 - Interés en matemáticas
 - Interés en ciencias
 - Interés en letras
 - Interés en tecnología
 - Edad

Reglas:
 - Si edad <16 - Aún tienes tiempo por decidir
 - Si tecnología >=8 y matemáticas >=7 - Ingeniería informática
 - Si ciencias >=8 y matemáticas >=7 - Medicina o Biología
 - Si letras >=8 y matemáticas < 6 - Periodismo o Derecho
 - si matemáticas >=8 y letras <6 - Economía o Administración
 - Otros casos - Explora carreras creativas o técnicas
*/

let mates=5;
let ciencias=7;
let letras=8;
let tecnologia=7;
let edad=18;

console.log("Interés en matemáticas: ", mates);
console.log("Interés en ciencias: ", ciencias);
console.log("Interés en letras: ", letras);
console.log("Interés en tecnología: ", tecnologia);
console.log("Edad: ", edad);

if (edad<16){
    console.log("Aún tienes tiempo para decidir");
}else if(tecnologia>=8 && mates>=7){
    console.log("Ingeniería Informática");
}else if(ciencias>=8 && mates >= 7){
    console.log("Medicina o Biología");
}else if(letras>=8 && mates < 6){
    console.log("Periodismo o Derecho");
}else if(mates>=8 && letras < 6){
    console.log("Economía o Administración");
}else{
    console.log("Explora carreras creativas o técnicas");
}