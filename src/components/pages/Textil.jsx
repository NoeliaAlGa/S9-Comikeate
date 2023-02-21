import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardsDiv, TitleStyle,PrecioCards, BodyTextil, ImgCard, CardDivTextil, RowDiv, ButtonInBottom, TextCards} from '../pages/style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";
import Col from 'react-bootstrap/Col';
import importarImagen from "./hooks/importarImagen";

const Textil = () => {
  const productosTextil = useEffectObtenerProductos("téxtil");
  console.log("productosComikeate", productosTextil);
  return (
    <BodyTextil>
    <Head />
    <Nav />
    <NavResponsive />
    <CardsDiv>
        <TitleStyle>TÉXTIL</TitleStyle>
        <RowDiv xs={1} md={3} className="g-4">
        {productosTextil.map((producto) => (
        <Col>
          <CardDivTextil>
            <ImgCard variant="top" src={importarImagen(producto.nombre)}  />
            <Card.Body>
              <Card.Title><b>{producto.nombre}</b></Card.Title>
              <TextCards>
                {producto.infoProducto}
              </TextCards>
              <ButtonInBottom>
                <PrecioCards><b>{producto.precio}€</b></PrecioCards>
                <Button variant="primary" onClick={() => añadirAlCarrito(producto.nombre, producto.precio)}><b>AÑADIR AL CARRITO</b></Button>
              </ButtonInBottom>
            </Card.Body>
          </CardDivTextil>
        </Col>
      ))}
    </RowDiv>
      </CardsDiv>
    <Footer />
  </BodyTextil>
  );
};
export default Textil;
