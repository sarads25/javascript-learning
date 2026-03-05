//Parte a: 
let num1=5;
let num2=10;

document.write("Estos son los dos números inicializados ", num1, " y ", num2, ".");
document.write("<br> La suma de estos dos es: ", num1+num2);


//Parte b:
let num1Usu;
let num2Usu;

num1Usu=parseInt(prompt("Introduzca un número"));
num2Usu=parseInt(prompt("Introduzca otro número"));

let suma=num1Usu+num2Usu;

alert("Este es el resultado " + suma); //otra forma sin crear una variable para sumar los nums
//Seria: alert("Ese es el resultado "+ (num1Usu+num2Usu));