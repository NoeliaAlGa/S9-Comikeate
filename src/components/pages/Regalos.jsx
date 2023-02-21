import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {CardsDiv, TitleStyle, BodyRegalos, RowDiv, CardDivRegalos, ImgCard, TextCards,ButtonInBottom, PrecioCards } from './style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";
import importarImagen from "./hooks/importarImagen";

const Regalos = () => {
  const productosRegalos = useEffectObtenerProductos("regalos");
  console.log("productosComikeate", productosRegalos);

  return (
    <BodyRegalos>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>REGALOS</TitleStyle>
        <RowDiv xs={1} md={3} className="g-4">
          {productosRegalos.map((producto) => (
            <Col>
              <CardDivRegalos>
                <ImgCard variant="top" src={importarImagen(producto.nombre)} />
                <Card.Body>
                  <Card.Title>
                    <b>{producto.nombre}</b>
                  </Card.Title>
                  <TextCards>{producto.infoProducto}</TextCards>
                  <ButtonInBottom>
                    <PrecioCards>
                      <b>{producto.precio}€</b>
                    </PrecioCards>
                    <Button
                      variant="primary"
                      onClick={() =>
                        añadirAlCarrito(producto.nombre, producto.precio)
                      }
                    >
                      <b>AÑADIR AL CARRITO</b>
                    </Button>
                  </ButtonInBottom>
                </Card.Body>
              </CardDivRegalos>
            </Col>
          ))}
        </RowDiv>
      </CardsDiv>
      <Footer />
    </BodyRegalos>
  );
};
export default Regalos;