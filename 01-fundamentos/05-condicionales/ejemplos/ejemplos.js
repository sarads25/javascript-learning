//Ejercicio 1: Positivo, negativo o cero

let numero= 0;

if(numero>0){
    console.log("Positivo");
}else if(numero<0){
    console.log("Negativo");
}else{
    console.log("Cero");
}

//Ejercicio 2: ¿Puede votar?

let edad=17;
let puedeVotar= edad>=18 ? "Puede votar" : "No puede votar";
console.log("¿Puede votar con ",edad, "? ", puedeVotar);

//Ejercicio 3: Calificación con letra
let nota=78;

switch(true){ //el valor a buscar es true
    case nota>=90:
        console.log("A");
        break;
    case nota>=80:
        console.log("B");
        break;
    case nota>=70: //esto se evalúa como true
        console.log("C");
        break;
    case nota>=60:
        console.log("D");
        break;
    default:
        console.log("F");   
}

//Ejercicio 4: Semáforo

let color="Rosa";

if(color==="Verde"){
    console.log("Avance");
}else if(color ==="Amarillo"){
    console.log("Precaución");
}else if (color==="Rojo"){
    console.log("Detengase");
}else{
    console.log("No se reconoció el color");
}

//Ejercicio 5: Año bisiesto

let anio=2005;

if(anio%4===0 && anio%100 !==0 || (anio%400===0)){
    console.log("Es bisiesto");
}else{
    console.log("No es bisiesto")
}