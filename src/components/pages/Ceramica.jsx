import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardsDiv, TitleStyle, BodyCeramica} from '../pages/style/GenericStyle';

const Ceramica = () => {
  return (
    <BodyCeramica>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>CERÁMICA</TitleStyle>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Cerámica</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
      </CardsDiv>
      <Footer />
    </BodyCeramica>
  );
};
export default Ceramica;