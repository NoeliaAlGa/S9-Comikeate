

function añadirAlCarrito(titulo, precio) {
  const elementosCarrito = window.localStorage.getItem("carrito") === null
  ? []
  : JSON.parse(window.localStorage.getItem("carrito"));

  const articuloRepetido = elementosCarrito.find(producto => producto.nombre === titulo); 
  
    if(articuloRepetido === undefined) {
        const carrito = {
            nombre: titulo,
            cantidad: 1,
            precio: precio,
          };

          elementosCarrito.push(carrito);
          alert("Añadido correctamente al carrito");
          window.localStorage.setItem("carrito", JSON.stringify(elementosCarrito));
    }
    else {
        articuloRepetido.cantidad +=1;
        window.localStorage.setItem("carrito", JSON.stringify(elementosCarrito));
    }     
}

export default añadirAlCarrito