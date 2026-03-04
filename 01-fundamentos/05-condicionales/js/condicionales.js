//IF SIMPLE

let edad=18;

if(edad>=18){
    console.log("Eres mayor de edad");
}

//cambiamos edad a 15 y veremos que no se ejectua
edad=15;

if(edad>=18){
    console.log("Esto No se mostrará porque edad es 15"); 
}


//IF-ELSE

let temperatura=30;

if(temperatura > 25){ //si es verdadero ejecutará este
    console.log("Hace calor");
}else{ 
    console.log("Hace fresco"); //si no es verdadero ejecutará este
}

//IF-ELSE IF-ELSE

let nota=85;

if(nota >=90){
    console.log("Excelente");
}else if (edad >=70){
    console.log("Bien");
}else if (edad>=50){
    console.log("Suficiente");
}else{
    console.log("Necesitas estudiar más");
}

//CONDICIONES COMPUESTAS (&&, ||)

let tieneCarnet=true;
let tieneCoche=false;

//AND (&&) - Todas deben ser true
if (tieneCarnet && tieneCoche){
    console.log("Puede conducir tu coche");
}else{
    console.log("No puedes conducir");
}

//OR (||) - Al menos UNA debe ser true
let esEstudiante=true;
let esJubilado=false;

if(esEstudiante || esJubilado){
    console.log("Tienes descuento");
}else{
    console.log("Precio normal")
}


// SWITCH

let color="rojo";

switch(color){ //evalua el valor de la variable
    case "rojo":
        console.log("El color es rojo"); //si es rojo se ejecutará este
        break; //sale del switch, no comprobará más
    case "azul":
        console.log("El color es azul");
        break;
    case "verde":
        console.log("El color es verde");
        break;
    default: //sin ninguno coincide, se ejecutará esto
        console.log("Color no reconocido");
}


// REPASO OPERADOR TERNARIO

let edadTernario=20;
let mensaje=edadTernario >= 18 ? "Mayor de edad" : "Menor de edad"; //condicion ? valor_si_true : valor_si_false
console.log("Edad", edadTernario, " - ", mensaje);

//es un if/else en una línea