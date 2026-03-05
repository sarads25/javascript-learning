//creación de variables
let num1;
let num2;

//pedimos números al usu
alert("MINI CALCULADORA");
num1=parseInt(prompt("Introduzca un número: "));
num2=parseInt(prompt("Introduzca otro número: "));

//Escribimos resultados en pantalla
document.write("<br>El resultado de sumar estos números es ", (num1+num2));
document.write("<br>El resultado de restar estos números es ", (num1-num2));
document.write("<br>El resultado de multiplicar estos números es ", (num1*num2));
document.write("<br>El resultado de dividir estos números es ", (num1/num2));