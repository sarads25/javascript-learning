/*PROYECTO 3: CAJERO AUTOMÁTICO

Simula un cajero automático con validación de PIN y operaciones

Datos de entrada:
 - saldo inicial
 - opcion (1: Ver saldo, 2: Retirar, 3: Depositar)
 - cantidad a retirar/depositar
 -pinIngresado y pinCorrecto
 
Reglas parar retirar:
 - Saldo suficiente
 - Máximo 500€ por retiro

Reglas para depósito:
 - Máximo 10.000€ por depósito */

let saldo=1000;
let opcion=2;
let cantidad= 100;
let pinIngreso=8514;
let pinCorrecto=8514;

if(pinIngreso===pinCorrecto){
    if(opcion===1){
        console.log("Saldo disponible: " ,saldo, "€");
    }else if(opcion===2){
        if(cantidad<saldo && cantidad<=500){
            saldo-=cantidad
            console.log("Retirando dinero...");
            console.log("Dinero actual: ", saldo, "€");
        }else{
          console.log("El máximo para retirar son 500€");
        }
    }else if(opcion===3){
        if(cantidad<=10000){
            saldo+=cantidad
            console.log("Depositando dinero...");
            console.log("Dinero actual: ", saldo)
        }else if (cantidad>=0){
            console.log("La cantidad a retirar debe ser mayor")
        }else{
            console.log("No se puede depositar.");
        }
    }
    console.log("Operación realizada");
}else{
    console.log("Introduzca correctamente su PIN");
}