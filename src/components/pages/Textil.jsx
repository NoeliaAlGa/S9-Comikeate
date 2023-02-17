import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardsDiv, TitleStyle,PrecioCards, BodyTextil, ImgCard, CardDiv2, RowDiv, ButtonInBottom, TextCards} from '../pages/style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import img1 from "../../img/productos/textil/bolsa cruela.jpg";
import añadirAlCarrito from "./hooks/AñadirAlCarrito";
import Col from 'react-bootstrap/Col';

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
          <CardDiv2>
            <ImgCard variant="top" src={img1}  />
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
          </CardDiv2>
        </Col>
      ))}
    </RowDiv>
      </CardsDiv>
    <Footer />
  </BodyTextil>
  );
};
export default Textil;
