//Creamos variables
let base;
let altura;

//Pedimos medidas al usuario mediante prompt
base=parseInt(prompt("Ingrese la base del triángulo: "));
altura=parseFloat(prompt("Ingrese la altura del triángulo: "));

//Creamos la variable formula y usamos las variables donde el usuario le ha asignado un num
const formula=(base*altura)/2;

//mostramos el resultado
alert("Este sería el resultado del área del triángulo: " + formula);