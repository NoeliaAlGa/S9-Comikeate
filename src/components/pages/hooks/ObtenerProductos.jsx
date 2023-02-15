import axios from 'axios';

// function ObtenerProductos(tipo) {
//     return axios.get('https://my.api.mockaroo.com/comikeate.json?key=e345e180')
//   .then(response => {
//     debugger;
//     const todosLosProductos = response.data;
//     const productosFiltradosPorTipo = todosLosProductos.filter((producto) => producto.tipo === tipo);
//     console.log(productosFiltradosPorTipo);
//     return productosFiltradosPorTipo;
//   })
//   .catch(error => {
//     console.error(error);
//     return [{id:1, nombre:'test', precio:15, infoProduct:'xxxx', img: 'comikeate_1.jpg'}]
//   });
  
// }

async function ObtenerProductos(tipo) {
    try {
      const response = await axios.get('https://my.api.mockaroo.com/comikeate.json?key=e345e180');
      const todosLosProductos = response.data;
      const productosFiltradosPorTipo = todosLosProductos.filter((producto) => producto.tipo === tipo);
      console.log(productosFiltradosPorTipo);
      return productosFiltradosPorTipo;
    } catch (error) {
      console.error('estoy dentroooooo!!!!!!!!!!!');
      console.error(error);
      return [
        {id:1, nombre:'test', precio:15, infoProducto:'xxxx', img: 'comikeate_1.jpg', tipo: 'comikeate'},
        {id:1, nombre:'test1', precio:15, infoProducto:'xxxx', img: 'comikeate_1.jpg', tipo: 'comikeate'},
        {id:1, nombre:'test2', precio:15, infoProducto:'xxxx', img: 'comikeate_1.jpg', tipo: 'comikeate'}
    ];
    }
  }
  

export default ObtenerProductos