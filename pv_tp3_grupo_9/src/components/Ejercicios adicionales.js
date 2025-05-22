// Declaración del array de productos con al menos 5 objetos
let productos = [
  { descripcion: "Auriculares", precio: 49000 },
  { descripcion: "Teclado", precio: 30000 },
  { descripcion: "Mouse", precio: 15000 },
  { descripcion: "Monitor", precio: 120000 },
  { descripcion: "Webcam", precio: 22000 }
];

// 1 - Mostrar cada producto en consola con forEach
console.log("1 - Lista de productos:");
productos.forEach(producto => {
  console.log(Producto: ${producto.descripcion} - Precio: $${producto.precio});
});

// 2 - Crear un nuevo array con productos cuyo precio sea mayor a $20.000
const productosMayoresA20k = productos.filter(producto => producto.precio > 20000);
console.log("\n2 - Productos con precio mayor a $20.000:");
console.log(productosMayoresA20k);

// 3 - Crear un array con productos con precio con IVA incluido (21%)
const productosConIVA = productos.map(producto => ({
  descripcion: producto.descripcion,
  precio: (producto.precio * 1.21).toFixed(2) // Redondeado a 2 decimales
}));
console.log("\n3 - Productos con IVA incluido (21%):");
console.log(productosConIVA);

// 4 - Ordenar el array original de productos por precio de menor a mayor
productos.sort((a, b) => a.precio - b.precio);
console.log("\n4 - Productos ordenados por precio (menor a mayor):");
console.log(productos);

// 5 - Agregar un nuevo producto al final del array
productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
console.log("\n5 - Producto agregado:");
console.log(productos);

// 6 - Eliminar el producto con el precio más bajo
// Ya que el array está ordenado por precio, simplemente quitamos el primero
const productoEliminado = productos.shift();
console.log("\n6 - Producto con precio más bajo eliminado:");
console.log(Eliminado: ${productoEliminado.descripcion} - $${productoEliminado.precio});
console.log("Array final de productos:");
console.log(productos);