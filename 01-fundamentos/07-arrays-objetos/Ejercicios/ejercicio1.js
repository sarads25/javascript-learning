//Tienda online

let productos=[{nombre:"Camiseta", precio:20, stock:5},
    {nombre:"Pantalón", precio:35, stock:3},
    {nombre:"Zapatos", precio:50, stock:0},
    {nombre:"Gorra", precio:15, stock:10}
];

//1. Muestra todos los prodcutos con for tradicional
for(let i=0;i<productos.length;i++){
    console.log("Productos: ",i, "-", productos[i]);
    //otra forma de hacerlo sería:
    //console.log(`${i+1}. ${productos[i].nombre} - ${productos[i].precio}€ (Stock: ${productos[i].stock})`);
}

//2. Muestra solo los productos en stock (stock>0)
for(let i=0; i<productos.length;i++){
    if(productos[i].stock>0){
        console.log(`- ${productos[i].nombre} (${productos[i].stock} unidades)`);
    }
}
/*let enStock = productos.filter(p => p.stock > 0);
console.log("\nCon filter:", enStock); */


//3. Calcula el precio total de todo el inventario (precio*stock de cada uno)
const precioTotal=productos.reduce((total,producto) => {
    return total+producto.precio;
},0);

/*let valorTotal = 0;
for(let i = 0; i < productos.length; i++) {
    valorTotal += productos[i].precio * productos[i].stock;
} */

console.log(precioTotal);

//4. Encuentra el producto más caro

let productoCaro=productos[0]; //empezamos asumiento que el primero es el más caro

for(let i=1;i<productos.length;i++){
    if(productos[i].precio>productoCaro.precio){
        productoCaro=productos[i]; //si el actual es más caro, él es el nuevo "lider"
    }
}
console.log("Este es el prodcuto más caro: ", productoCaro.nombre);