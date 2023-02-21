import guardarFechactual from "./guardarFechactual";

function añadirListaPedidos(pedido, observacionesCliente) {
    const listaPedidos =
    window.localStorage.getItem("listaPedidos") === null
      ? []
      : JSON.parse(window.localStorage.getItem("listaPedidos"));


      const logedUser = JSON.parse(window.localStorage.getItem("LogedUser"));
      const usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
      const infoUsuarioLogeado = usuarios.filter(usuario => usuario.nombre === logedUser.nombre);
      console.log("infoUsuarioLogeado", infoUsuarioLogeado);
      const fechaActual = guardarFechactual();

      const pedidoActual = {
        numPedido: Math.random() * (1000 - 1 + 1) + 1,
        nombreCliente: logedUser.nombre,
        mailCliente: infoUsuarioLogeado[0].mail,
        fechaPedido: fechaActual,
        pedido: pedido,
        observaciones: observacionesCliente,
      };

      listaPedidos.push(pedidoActual);
      window.localStorage.setItem("listaPedidos", JSON.stringify(listaPedidos));
}

export default añadirListaPedidos