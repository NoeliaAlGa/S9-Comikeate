

function añadirListaPedidos(pedido) {
    const listaPedidos =
    window.localStorage.getItem("listaPedidos") === null
      ? []
      : JSON.parse(window.localStorage.getItem("listaPedidos"));

      const pedidoActual = {
        numPedido: Math.random() * 2,
        pedido: pedido,
      };
      listaPedidos.push(pedidoActual);
      window.localStorage.setItem("listaPedidos", JSON.stringify(listaPedidos));
}

export default añadirListaPedidos