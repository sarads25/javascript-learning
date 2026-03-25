let numTelefono=prompt("Introduzca su nº. de teléfono");
let validar=/^\d{9}$/;

if(validar.test(numTelefono)){
    alert("El teléfono es válido");
}else{
    alert("El teléfono no es válido");
}