// Comikeate
import ImgIlustracion from "../../../img/productos/personalizaciones/familiabebe.jpg";
import ImgIlustracionLienzo from "../../../img/productos/personalizaciones/ilustracionconlienzo.jpg"
// Textil
import ImgBolsaCruella from "../../../img/productos/textil/bolsa cruela.jpg"
import ImgCamisetaHP from "../../../img/productos/textil/camiseta HP.jpg"
import ImgCamisetaLoki from "../../../img/productos/textil/loki camiseta.jpg"
// Regalos
import ImgChapaBoda from "../../../img/productos/regalos/Chapaboda.jpg"
import ImgTazaPapa from "../../../img/productos/regalos/taza.jpg"
import ImgTazaMama from "../../../img/productos/regalos/tazadiadelamadre.jpg"
// Madera
import ImgPokemon from "../../../img/productos/madera/cuelgaPuertaPokemnmon.jpg"
import ImgHercules from "../../../img/productos/madera/mobilHercules.jpg"
import ImgSDLA from "../../../img/productos/madera/cajaPersonalizadaAnillos.jpg"
// Lienzos
import ImgDragonBall from "../../../img/productos/lienzos/lienzoDragonBall.jpg"
import ImgJoker from "../../../img/productos/lienzos/maderaJoker.jpg"
import ImgSW from "../../../img/productos/lienzos/acuarelaSW.jpg"

function importarImagen(nombre) {
    // Comikeate
  if( nombre === "Ilustración digital") {
    return ImgIlustracion
  }
  if( nombre === "Ilustración en lienzo") {
    return ImgIlustracionLienzo
  }
// Textil
  if( nombre === "Tote bag Cruella") {
    return ImgBolsaCruella
  }
  if( nombre === "Camiseta Harry Potter") {
    return ImgCamisetaHP
  }
  if( nombre === "Camiseta Loki") {
    return ImgCamisetaLoki
  }
// Regalos
  if( nombre === "Chapa boda") {
    return ImgChapaBoda
  }
  if( nombre === "Taza dia del padre") {
    return ImgTazaPapa
  }
  if( nombre === "Taza día de la madre") {
    return ImgTazaMama
  }
// Madera
if( nombre === "Móvil Hércules") {
    return ImgHercules
  }
  if( nombre === "Cuelga puertas Pokemon") {
    return ImgPokemon
  }
  if( nombre === "Caja Señor de los anillos") {
    return ImgSDLA
  }
  // Lienzos
if( nombre === "Lienzo Dragon Ball") {
    return ImgDragonBall
  }
  if( nombre === "Cuadro madera Joker") {
    return ImgJoker
  }
  if( nombre === "Darth Moul acrilic acuarela") {
    return ImgSW
  }
}

export default importarImagen