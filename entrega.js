



// creador obj > array para el reduce

function nuevoArticulo (nombre , precio) {
    this.articuloNombre = nombre = prompt("ingresar nombre del nuevo articulo");
    this.articuloPrecio = precio = Number(prompt("ingresar precio del articulo"));
};

const articulos = new nuevoArticulo();

console.log(articulos);


// const articulos = [
//     {nombre: "x", precio: 100 },
//     {nombre: "y", precio: 200 },
//     {nombre: "z", precio: 300 },
// ];

// // let totalCompra = 0

// let montoFinal = articulos.reduce ((suma, producto) => {
//     return suma + producto.precio;
// },0);

// console.log(montoFinal);



