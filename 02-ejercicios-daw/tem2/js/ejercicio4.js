let num = parseInt(prompt("Ingrese un entero positivo para la cuenta atrás"));

//verificamos si el numero es mayor o igual que 0
if(num >= 0){
    let contador = num; //creamos la variable contador y le asignamos el valor de num - está variable irá disminuyendo
    let resultado = ""; //creamos variable donde se irá acumulando los números y las comas
    
    //mientras contador sea mayor o igual a 0, el bucle seguirá 
    while(contador >= 0){
        resultado += contador; //va añadiendo el número actual al resultado
        if(contador > 0){
            resultado += ", "; //si el num es mayor que 0 , se añade una coma 
        }
        contador--; //reduce el contador en 1 para la siguiente vuelta
    }
    
    document.write(resultado);
}else{
    document.write("Número no válido. Debe ser un entero positivo");
}