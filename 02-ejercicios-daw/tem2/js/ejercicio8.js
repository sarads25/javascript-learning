let nombre=trim(prompt("Introduzca su nombre"));

if(nombre.length=0){
    alert("No puede dejarlo vacio, por favor introduzca su nombre.");
}else if(nombre.length>50){
    alert("No puede contener más de 50 carácteres.");
}else{
    alert("El nombre es válido: " + nombre);
}