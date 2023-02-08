import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  BodyContactanos,
  TitleStyle,
  CardsDiv,
  DivFormStyle
} from "../pages/style/GenericStyle";

const Contactanos = () => {
  return (
    <BodyContactanos>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>CONTACTANOS</TitleStyle>
        <DivFormStyle>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Escribe tú mail aquí ^^"
              />
              <Form.Text className="text-muted">
                ¡Tranquilo no enviaremos tú mail a nadie más!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>
                <b>Mensaje</b>
              </Form.Label>
              <div>
                <Form.Control type="text" placeholder="Tú mensaje aquí ^^" />
              </div>
            </Form.Group>
            <Button variant="warning" type="submit">
              <b>Enviar</b>
            </Button>
          </Form>
        </DivFormStyle>
      </CardsDiv>
    </BodyContactanos>
  );
};

export default Contactanos;
