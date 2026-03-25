let num=parseInt(prompt("Introduza un número y te diré a que día corresponde"));

switch(num){
    case 1:
        document.write("Es lunes");
        break;
    case 2:
        document.write("Es martes");
        break;
    case 3:
        document.write("Es miércoles");
        break;
    case 4:
        document.write("Es jueves");
        break;
    case 5:
        document.write("Es viernes");
        break;
    case 6:
        document.write("Es sábado");
        break;
    case 7:
        document.write("Es domingo");
        break;
    default:
        document.write("No sé que día es");
}