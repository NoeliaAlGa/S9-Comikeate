import axios from 'axios';

async function ObtenerProductos(tipo) {
    try {
      const response = await axios.get('https://my.api.mockaroo.com/comikeate.json?key=e345e180');
      const todosLosProductos = response.data;
      const productosFiltradosPorTipo = todosLosProductos.filter((producto) => producto.tipo === tipo);
      console.log(productosFiltradosPorTipo);
      return productosFiltradosPorTipo;
    } catch (error) {
      console.error(error);
      if(tipo === "comikeate") {
        return [
          {id:1, nombre:'Ilustración digital', precio:15, infoProducto:'Convierte a tu familia y amigos en comic o en sus personajes favoritos. Envía su foto y explicadnos cuál es tu idea. Estaremos en contacto en todo momento mientras se realiza la ilustración. Se realizarán 2 pruebas, una al hacer el esbozo y otra al acabar el coloreado, para poder hacer cambios si es necesario. Una vez entregado el trabajo no se podrán hacer cambios.', img: 'familiabebe.jpg', tipo: 'comikeate'},
          {id:2, nombre:'Ilustración en lienzo', precio:55, infoProducto:'Lienzo de 30x40 con ilustración personalizada. Envía una foto y explicadnos cuál es tu idea. Estaremos en contacto en todo momento mientras se realiza la ilustración. Se realizarán 2 pruebas, una al hacer el esbozo y otra al acabar el coloreado, para poder hacer cambios si es necesario. ¡Una vez dado el ok a la prueba se realizará la impresión del lienzo y en pocos días lo tendrás en casa!.', img: 'diadelamadre.jpg', tipo: 'comikeate'}
        ]
      }
      else if (tipo === "téxtil") {
        return [
          {id:3, nombre:'Tote bag Cruella', precio:10, infoProducto:'Bolsa de tela color beige, con ilustración de Cruella.', img: 'bolsacruela.jpg', tipo: 'téxtil'},
          {id:4, nombre:'Camiseta Harry Potter', precio:15, infoProducto:'Camiseta blanca con ilustración del personaje Harry Potter. Especifica la talla que necesitas al finalizar el pedido. Tallas: Mujer(s,m,l,xl), Hombre(s,m,l,xl), Niño(5-7 años, 8-10 años, 11-12 años).', img: 'camiseta HP.jpg', tipo: 'téxtil'},
          {id:5, nombre:'Camiseta Loki', precio:15, infoProducto:'Camiseta blanca con ilustración del personaje Loki. Especifica la talla que necesitas al finalizar el pedido. Tallas: Mujer(s,m,l,xl), Hombre(s,m,l,xl), Niño(5-7 años, 8-10 años, 11-12 años).', img: 'loki camiseta.jpg', tipo: 'téxtil'},
        ]
      }
      else if (tipo === "regalos") {
        return [
          {id:6, nombre:'Taza dia del padre', precio:25, infoProducto:'Taza día del padre Star Wars, Yo soy tu padre.', img: 'tazadiadelpadre.jpg', tipo: 'regalos'},
          {id:7, nombre:'Chapa boda', precio:10, infoProducto:'Chapa personalizada para boda. Pon la cara y nombre de los que se casan para un regalo genial!. Especifica los nombres y adjunta la foto al finalizar el pedido. Medida 5cm diámetro. ', img: 'chapaBoda.jpg', tipo: 'regalos'},
          {id:8, nombre:'Taza día de la madre', precio:15, infoProducto:'Taza día de la madre. Madre no hay más que una. ', img: 'tazadiadelamadre.jpg', tipo: 'regalos'},
  
        ]
      }
      else if (tipo === "madera") {
        return [
          {id:9, nombre:'Cuelga puertas Pokemon', precio:10, infoProducto:'Cuelga puertas iniciales Pokemos 1a generación. En observaciones escribenos que modelo quieres.', img: 'cuelgaPuertaPokemnmon.jpg', tipo: 'madera'},
          {id:10, nombre:'Móvil Hércules', precio:15, infoProducto:'Móvil Hércules bebé. Personalízalo con el nombre que quieras. Especifícalo al finalizar el pedido.', img: 'mobilHercules.jpg', tipo: 'madera'},
          {id:11, nombre:'Caja Señor de los anillos', precio:15, infoProducto:'Caja personalizada con tus nombres para anillos del Señor de los Anillos.', img: 'cajaLOTR.jpg', tipo: 'madera'},
        ]
      }
      else {
        return [
          {id:12, nombre:'Lienzo Dragon Ball', precio:15, infoProducto:'Lienzo, Dragón Ball 4 personajes (Goku, Vegeta, Gohan, Brolly). Lienzo pintado a mano en acrílico. Medida 40x60.', img: 'lienzoDragonBall.jpg', tipo: 'lienzos'},
          {id:13, nombre:'Cuadro madera Joker', precio:15, infoProducto:'Impresión ilustración Joker sobre madera. Medida 20x40.', img: 'maderaJoker.jpg', tipo: 'lienzos'},
          {id:14, nombre:'Darth Moul acrilic acuarela', precio:15, infoProducto:'Lienzo Star Wars, personaje Darth Moul. Lienzo pintado a mano en acrílico. Medida 30x40.', img: 'acuarelaSW.jpg', tipo: 'lienzos'}
        ];
      }
   
    }
  }
  

export default ObtenerProductos