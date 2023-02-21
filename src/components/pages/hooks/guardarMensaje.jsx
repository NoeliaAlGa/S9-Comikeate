import guardarFechactual from "./guardarFechactual";

function guardarMensaje(mailContacto, mensajeContacto) {
   
  const mensajes = window.localStorage.getItem("mensajes") === null
  ? []
  : JSON.parse(window.localStorage.getItem("mensajes"));

  const fechaActual = guardarFechactual();

  const mensajeActual= {
    mail: mailContacto,
    mensaje: mensajeContacto,
    fecha: fechaActual
  }

  mensajes.push(mensajeActual);
  console.log("mensajes", mensajes);
  window.localStorage.setItem("mensajes", JSON.stringify(mensajes));
}

export default guardarMensaje