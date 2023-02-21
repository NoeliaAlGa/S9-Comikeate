import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {CardsDiv, TitleStyle, BodyMadera, RowDiv, CardDivMadera, ImgCard, TextCards,ButtonInBottom, PrecioCards } from './style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";
import importarImagen from "./hooks/importarImagen";

const Madera = () => {
  const productosMadera = useEffectObtenerProductos("madera");
  console.log("productosComikeate", productosMadera);

  return (
    <BodyMadera>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>MADERA</TitleStyle>
        <RowDiv xs={1} md={3} className="g-4">
          {productosMadera.map((producto) => (
            <Col>
              <CardDivMadera>
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
              </CardDivMadera>
            </Col>
          ))}
        </RowDiv>
      </CardsDiv>
      <Footer />
    </BodyMadera>
  );
};
export default Madera;