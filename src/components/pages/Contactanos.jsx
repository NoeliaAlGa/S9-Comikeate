import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ImgContactanos from "../../img/productos/lienzos/lienzoDragonBall.jpg"
import {
  BodyContactanos,
  TitleStyle,
  CardsDiv,
} from "../pages/style/GenericStyle";
import {ImgContactStyle, DivFormStyle, DivForm, TextAreaStyle, BStyle} from "./style/ContactanosStyle";

const Contactanos = () => {
  return (
    <BodyContactanos>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>CONTACTANOS</TitleStyle>
        <DivFormStyle>
          <DivForm>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <BStyle>Email</BStyle>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Escribe tú mail aquí ^^"
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>
                  <BStyle>Mensaje</BStyle>
                </Form.Label>
                <div>
                  <TextAreaStyle type="text" placeholder="Tú mensaje aquí ^^" />
                </div>
              </Form.Group>
              <Button variant="warning" type="submit">
                <BStyle>Enviar</BStyle>
              </Button>
            </Form>
          </DivForm>
          <ImgContactStyle src={ImgContactanos} alt="contactanos"></ImgContactStyle>
        </DivFormStyle>
      </CardsDiv>
      <Footer />
    </BodyContactanos>
  );
};

export default Contactanos;
