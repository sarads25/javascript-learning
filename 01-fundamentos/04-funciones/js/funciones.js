//Función 1: Función básica (sin parámetros)

function saludar(){
    console.log("¡Hola desde una función básica");
}

saludar(); //-> Así se llama (ejecuta) la función


//Función 2: Función con parámetros

function saludarPersona(nombre){ //Parámetro: un "hueco" para recibir un valor
    console.log("¡Hola " + nombre + "!");
}

saludarPersona("Ana"); //Argumento: valor que le pasamos
saludarPersona("Carlos");


//Función 3: Función con varios parámetros

function sumar(a,b){ //dos parámetros separados por coma
    console.log(a + " + " + b + " = " + (a+b));
}

sumar(5,2);
sumar(10,15);


//Función 4: Función con RETURN

function multiplicar (x,y){
    return x * y; //devuelve un valor para usarlo fuera | sin return la función hace cosas pero no da resultado
}

let resultado=multiplicar(4,5);
console.log(resultado); //20

//Analogía: Como una máquina expendedora. Metes dinero (parámetros), haces clic (ejecutas) y te da un producto (return)
//Comparación:

    //sin return (solo muestra, no devuelve)
    function sumaSinReturn(a,b){
        console.log(a+b);
    }

    //con return (devuelve el valor)
    function sumaConReturn (a,b){
        return a + b;
    }

    let x=sumaSinReturn(5,3);
    let y=sumaConReturn(5,3);


//Función 5: Parámetros por defecto

function precioConIva(precio, iva=21){
    let total= precio + (precio * iva/100);
    return total;
}

console.log(precioConIva(100)); //usa 21% por defecto
console.log(precioConIva(100, 10)); //usa 10%


//Función 6: Funciones flecha

    //forma tradicional
    function cuadradoTradicional(num){
        return num*num;
    }

    //forma flecha -> REGLAS: UN parámetro, se puede quitar los paréntesis: num => // UNA línea, puedes quitar {} y return
    const cuadradoFlecha= (num) => {
        return num*num; 
    }


//Función 7: Función que usa otra función

function esPar(numero){
    return numero%2===0;
}

function analizarNumeros(lista){
    for(let i=0; i<lista.length;i++){ //i=0,1,2,3,...
        if(esPar(lista[i])){ //lista[0], lista[1], lista[2],...
            console.log(lista[i]+ " es Par");
        }else{
            console.log(lista[i] + " es Impar");
            
        }
    }
}

analizarNumeros([1,2,3,4,5]);