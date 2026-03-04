//Ejercicio 1: Sumar números del 1 al 100
let sumaTotal=0;
for(let i=1; i<=100;i++){
    sumaTotal+=1;
}
console.log("Resultado: ", sumaTotal);

//Ejercicio 2: Mostrar números impares del 1 al 20
for(let i=1; i<=20;i+=2){
    console.log(i);
}

//Ejercicio 3: Tabla de multiplicar del 7
for(let i=1;i<=10;i++){
    console.log("7 x ", i , " = ", 7*i);
}

//Ejercicio 4: Juego de adivinanza con Buble

let numSecreto=8;
let intentosRestantes=3;
let acertado=false;

for(let i=1; i<=3; i++){
    let intento=5;

    if(intento===numSecreto){
        console.log("Ganaste");
        acertado=true;
    }else if(intento<numSecreto){
        console.log("El número es mayor");
    }else{
        console.log("El número es menor");
    }

    if(i===3 && !acertado){
        console.log("Fin del juego. El número era: ", numSecreto);
    }
}