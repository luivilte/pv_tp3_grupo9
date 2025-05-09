

// Declaración del array de productos con al menos 5 objetos
let productos = [
    { descripcion: "Memoria ram", precio: 49000 },
    { descripcion: "disco rigido", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "CPU", precio: 120000 },
    { descripcion: "Teclado", precio: 22000 }
  ];
  
  //Punto 1:
  console.log("1 - Lista de productos:");
  productos.forEach(producto => {
    console.log(Producto: ${producto.descripcion} - Precio: $${producto.precio});
  });



  // Punto 2: 
  const productosMayoresA20k = productos.filter(producto => producto.precio > 20000);
  console.log("\n2 - Productos con precio mayor a $20.000:");
  console.log(productosMayoresA20k);
  

  // Punto 3: 
  const productosConIVA = productos.map(producto => ({
    descripcion: producto.descripcion,
    precio: (producto.precio * 1.21).toFixed(2)  
  console.log("\n3 - Productos con IVA incluido (21%):");
  console.log(productosConIVA);


  
  // Punto 4: 
  productos.sort((a, b) => a.precio - b.precio);
  console.log("\n4 - Productos ordenados por precio (menor a mayor):");
  console.log(productos);
  
  // Punto 5:
  productos.push({ descripcion: "Apple iphone", precio: 59000.90 });
  console.log("\n5 - Producto agregado:");
  console.log(productos);


  
  // Punto 6: 
  const productoEliminado = productos.shift();
  console.log("\n6 - Producto con precio más bajo eliminado:");
  console.log(Eliminado: ${productoEliminado.descripcion} - $${productoEliminado.precio});
  console.log("Array final de productos:");
  console.log(productos);
  
  