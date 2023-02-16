import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardsDiv, CardStyle,ImgCard, TitleStyle,TitleCards,TextCards,PrecioCards, BodyComikeate} from '../pages/style/GenericStyle';
import useEffectObtenerProductos from "./hooks/useEffectObtenerProductos";
import img1 from "../../img/productos/personalizaciones/familiabebe.jpg";
// import img2 from "../../img/productos/personalizaciones/diadelamadre.jpg"
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
        <CardStyle>
        {productosComikeate.map((producto) => {
            // const srcImg = `../../img/productos/personalizaciones/${producto.img}`;
            return (
                <Card key={producto.id} style={{margin: "2rem"}}>
                    <ImgCard src={img1} />
                    <Card.Body>
                    <TitleCards><b>{producto.nombre}</b></TitleCards>
                    <TextCards>{producto.infoProducto}</TextCards>
                    <PrecioCards><b>{producto.precio}€</b></PrecioCards>
                    <Button variant="primary" >Añadir a la cesta</Button>
                    </Card.Body>
                </Card>
              )
        })}
        </CardStyle>
      </CardsDiv>
      <Footer />
    </BodyComikeate>
  );
};
export default Comikeate;
