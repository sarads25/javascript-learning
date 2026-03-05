/*PROYECTO 1: CALCULADORA DE IMC

Crea un programa que calcule el índice de Masa Corporal (IMC) y clasifique el resultado

Datos de entrada:
 - peso (en kilogramos)
 - altura (en metros)

Fórmula: IMC = peso / (altura * altura)

Clasificación:

IMC < 18.5 -> Bajo peso
18.5 <=IMC<25 -> Normal
25<=IMC<30 -> Sobrepeso
IMC >=30 -> Obesidad

*/

let peso=52;
let altura= 1.60;

console.log("Peso: ", peso, "kg");
console.log("Altura: ", altura, "m");

let imc= peso / (altura*altura);
imc=imc.toFixed(1); //redondear a 1 decimal

console.log("Tu IMC es:", imc);

if (imc < 18.5){
    console.log("Bajo peso");
}else if (imc>=18.5 && imc < 25){
    console.log("Normal");
}else if(imc>=25 && imc<30){
    console.log("Sobrepeso");
}else{
    console.log("Obesidad");
}