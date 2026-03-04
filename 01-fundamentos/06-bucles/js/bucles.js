//WHILE - "Mientras se cumpla..."

//Ejemplo 1 - Contar del 1 al 5
console.log("Contar del 1 al 5");
let contador=1;

while(contador <=5){
    console.log("Número: ", contador);
    contador++; //si no aumentamos, sería infinito
}

console.log("Terminé de contar");

//Ejemplo 2: Sumar número hasta llegar a 20
console.log("Sumar números hasta llegar a 20");
let suma=0;
let numero=1;

while(suma<=20){
    suma=suma+numero;
    console.log("Sumando", numero, "- suma parcial:", suma);
    numero++;
}
console.log("Suma final: ", suma);

//Ejemplo 3: Pedir contraseña hasta que sea correcta
console.log("Validar contraseña");
let intentos=0;
let contraCorrecta="1234";
let contraseñaIngresada="0000";

while(contraCorrecta!==contraCorrecta && intentos <3){
    intentos++;
    console.log("Intento", intentos, ": Contraseña incorrecta");
    
    if(intentos===1) contraseñaIngresada="1111";
    if(intentos===2) contraseñaIngresada="1234";
}

if(contraseñaIngresada===contraCorrecta){
    console.log("Acceso concedido");
}else{
    console.log("Demasiados intentos");
}


//BUCLE FOR - Para i desde...hasta...

//Ejemplo 1: Tabla de multiplicar
console.log("Tabla del 5");
for(let i=1;i<=10;i++){
    console.log("5 x ", i, "=", 5*i);
}

//Ejemplo 2: Mostrar números pares del 1 al 10
for (let i=2;i<=10;i+=2){
    console.log(i, "es par");
}

//Ejemplo 3: Cuenta atrás
console.log("Cuenta atrás");
for(let i=5;i >=1; i--){
    console.log(i);
}

//BUCLE DO..WHILE - Haz esto, y mientras se cumpla

//Ejemplo: Garantiza que se ejecuta al menos una vez
let numeroSecrt=7;
let intento=5;

do{
    console.log("Intentando con: ", intento);

    if(intento===numeroSecrt){
        console.log("Acertaste");
    }else{
        console.log("No es el número");
        
    }
}while(intento<=numeroSecrt);