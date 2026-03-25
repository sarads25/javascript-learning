//creamos una variable donde almacenaremos la respuesta por usu
let respuesta=prompt("¿Eres culpable?");

//creamos una variable para guardar la respuesta del usuario pasa a minusculas
let MinRespuesta=respuesta.toLocaleLowerCase();

//validamos respuesta
if(MinRespuesta=="si"){
    alert("Irás a la cárcel");
}else if(MinRespuesta=="no"){
    alert("Irás a casa");
}else{
    alert("No es una respuesta válida");
}

