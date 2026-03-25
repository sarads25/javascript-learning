const coche={
   marca:"Hyundai",
   matricula:"1234BCD",
   anio:2012,
   nombreDuenio:"Pepe Gonzalez"
};

for(let vehiculo in coche){
    document.write(vehiculo + " : " + coche[vehiculo] + "<br>");
}