import axios from 'axios';

async function ObtenerProductos(tipo) {
    try {
      const response = await axios.get('https://my.api.mockaroo.com/comikeate.json?key=e345e180_');
      const todosLosProductos = response.data;
      const productosFiltradosPorTipo = todosLosProductos.filter((producto) => producto.tipo === tipo);
      console.log(productosFiltradosPorTipo);
      return productosFiltradosPorTipo;
    } catch (error) {
      console.error(error);
      if(tipo === "comikeate") {
        return [
          {id:1, nombre:'ilustración', precio:15, infoProducto:'Convierte a tu familia y amigos en comic o en sus personajes favoritos. Envía su foto y explicadnos cuál es tu idea. Estaremos en contacto en todo momento mientras se realiza la ilustración. Se realizarán 2 pruebas, una al hacer el esbozo y otra al acabar el coloreado, para poder hacer cambios si es necesario. Una vez entregado el trabajo no se podrán hacer cambios.', img: 'familiabebe.jpg', tipo: 'comikeate'},
          {id:2, nombre:'Ilustración en lienzo', precio:55, infoProducto:'Lienzo de 30x40 con ilustración personalizada. Envía una foto y explicadnos cuál es tu idea. Estaremos en contacto en todo momento mientras se realiza la ilustración. Se realizarán 2 pruebas, una al hacer el esbozo y otra al acabar el coloreado, para poder hacer cambios si es necesario. ¡Una vez dado el ok a la prueba se realizará la impresión del lienzo y en pocos días lo tendrás en casa!.', img: 'diadelamadre.jpg', tipo: 'comikeate'}
        ]
      }
      else if (tipo === "téxtil") {
        return [
          {id:3, nombre:'Bolsa Cruela', precio:10, infoProducto:'Bolsa tela Cruela', img: 'bolsacruela.jpg', tipo: 'téxtil'},
          {id:4, nombre:'Camiseta Harry Potter', precio:15, infoProducto:'Camiseta Harry Potter algodón', img: 'camiseta HP.jpg', tipo: 'téxtil'},
          {id:5, nombre:'Camiseta Loki', precio:15, infoProducto:'Camiseta Loki algodón', img: 'loki camiseta.jpg', tipo: 'téxtil'},
        ]
      }
      else if (tipo === "regalos") {
        return [
          {id:6, nombre:'Gorras Dr Slum', precio:25, infoProducto:'Gorras Dr Slum', img: 'gorra drSlum.jpg', tipo: 'regalos'},
          {id:7, nombre:'Chapa boda', precio:10, infoProducto:'Chapa boda', img: 'chapaBoda.jpg', tipo: 'regalos'},
          {id:8, nombre:'Caja Señor de los anillos', precio:15, infoProducto:'Caja Señor de los anillos nombres personalizados. Escribelos en observaciones en el carrito ', img: 'cajaPersonalizadaAnillos.jpg', tipo: 'regalos'},
  
        ]
      }
      else if (tipo === "madera") {
        return [
          {id:9, nombre:'Cuelga puertas Pokemon', precio:10, infoProducto:'Cuelga puertas Pokemon', img: 'cuelgaPuertaPokemnmon.jpg', tipo: 'madera'},
          {id:10, nombre:'Movil Hercules', precio:15, infoProducto:'Movil Hercules, con nombre personalizado. Escribelo en observaciones en el carrito', img: 'mobilHercules.jpg', tipo: 'madera'},
          {id:11, nombre:'Adorno entrada casa', precio:15, infoProducto:'Adorno entrada casa, con nombre personalizado. Escribelo en observaciones en el carrito', img: 'adornoCasa.jpg', tipo: 'madera'},
        ]
      }
      else {
        return [
          {id:12, nombre:'Lienzo DragonBall', precio:15, infoProducto:'xxxx', img: 'lienzoDragonBall.jpg', tipo: 'lienzos'},
          {id:13, nombre:'Cuadro madera Joker', precio:15, infoProducto:'xxxx', img: 'maderaJoker.jpg', tipo: 'lienzos'},
          {id:14, nombre:'Star Wars acrilic acuarela', precio:15, infoProducto:'xxxx', img: 'acuarelaSW.jpg', tipo: 'lienzos'}
        ];
      }
   
    }
  }
  

export default ObtenerProductos