import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {
  CardsDiv,
  TitleStyle,
  PrecioCards,
  BodyComikeate,
  ImgCard,
  CardDiv,
  RowDiv,
  ButtonInBottom,
  TextCards,
} from "../pages/style/GenericStyle";
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";
import importarImagen from "./hooks/importarImagen";

const Comikeate = () => {
  const productosComikeate = useEffectObtenerProductos("comikeate");
  console.log("productosComikeate", productosComikeate);
  return (
    <BodyComikeate>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>COMIKEATE</TitleStyle>
        <RowDiv xs={1} md={2} className="g-4">
          {productosComikeate.map((producto) => (
              <Col>
              <CardDiv>
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
              </CardDiv>
            </Col>
            )
          )}
        </RowDiv>
      </CardsDiv>
      <Footer />
    </BodyComikeate>
  );
};
export default Comikeate;
