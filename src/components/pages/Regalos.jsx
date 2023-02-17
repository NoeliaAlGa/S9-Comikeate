import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {CardsDiv, TitleStyle, BodyRegalos, RowDiv, CardDiv2, ImgCard, TextCards,ButtonInBottom, PrecioCards } from './style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import img1 from "../../img/productos/regalos/chapaAmigas.jpg";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";

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
              <CardDiv2>
                <ImgCard variant="top" src={img1} />
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
              </CardDiv2>
            </Col>
          ))}
        </RowDiv>
      </CardsDiv>
      <Footer />
    </BodyRegalos>
  );
};
export default Regalos;