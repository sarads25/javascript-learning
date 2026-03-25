let temp = parseInt(prompt("Introduzca la temperatura que desee:"));

if(temp < 0){
    alert("Vete a criar pingüinos");
}else if(temp >= 0 && temp <= 19){
    alert("Hay que encender el calefactor");
}else if(temp >= 20 && temp <= 27){
    alert("No toques nada que está perfecto");
}else if(temp >= 28 && temp <= 30){
    alert("Parece que ya hace calor");
}else if(temp >= 31 && temp <= 38){
    alert("Hay que encender el aire frío");
}else if(temp >= 39){
    alert("Esto es un infierno");
}else{
    alert("Error");
}