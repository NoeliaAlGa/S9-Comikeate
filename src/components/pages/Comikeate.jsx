import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardsDiv, TitleStyle, BodyComikeate} from '../pages/style/GenericStyle';
import ObtenerProductos from "./hooks/ObtenerProductos";
import { useEffect, useState } from "react";

const Comikeate = () => {
  const [productosComikeate, setProductosComikeate] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await ObtenerProductos('comikeate');
        console.log('estoy en el useEffect__________________', data);
        setProductosComikeate(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  

  // useEffect(() => {
  //   debugger;
  //   ObtenerProductos('comikeate')
  //     .then(data => {
  //       debugger;
  //       setProductosComikeate(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <BodyComikeate>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>COMIKEATE</TitleStyle>
        {productosComikeate.map((producto) => {
          debugger;
            console.log('producto dentro del map', producto);
            const srcImg = `./img/${producto.img}`;
                  return (<Card key={producto.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={srcImg} />
                  <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>
                  {producto.infoProducto}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>)

        })}
        {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Comikeate</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}


      </CardsDiv>
      {/* <Button onClick={() => ObtenerProductos('comikeate')}>obtener productos</Button> */}
      <Footer />
    </BodyComikeate>
  );
};
export default Comikeate;
