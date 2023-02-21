import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {CardsDiv, TitleStyle, BodyLienzos, RowDiv, CardDivLienzos, ImgCard, TextCards,ButtonInBottom, PrecioCards } from './style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import img1 from "../../img/productos/lienzos/maderaJoker.jpg";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";


const Lienzos = () => {
  const productosLienzos = useEffectObtenerProductos("lienzos");
  console.log("productosComikeate", productosLienzos);

  return (
    <BodyLienzos>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>LIENZOS</TitleStyle>
        <RowDiv xs={1} md={3} className="g-4">
          {productosLienzos.map((producto) => (
            <Col>
              <CardDivLienzos>
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
              </CardDivLienzos>
            </Col>
          ))}
        </RowDiv>
      </CardsDiv>
      <Footer />
    </BodyLienzos>
  );
};
export default Lienzos;