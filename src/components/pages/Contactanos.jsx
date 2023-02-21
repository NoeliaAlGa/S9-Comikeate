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
import { useState } from "react";
import guardarMensaje from "./hooks/guardarMensaje";

const Contactanos = () => {
  const [mailContacto, setMailContacto] = useState("");
  const [mensajeContacto, setMensajeContacto] = useState("");

  const handleLogin = (e) => {
    guardarMensaje(mailContacto, mensajeContacto);
    window.location.href = "/Home";
      alert("¡Mensaje enviado correctamente, revisa tu correo en los próximos días y gracias por contactar con nosotros!");
  };
  
  return (
    <BodyContactanos>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>CONTACTANOS</TitleStyle>
        <DivFormStyle>
          <DivForm>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <BStyle>Email</BStyle>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Escribe tú mail aquí ^^"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Ej. nombre@tuServidor.com"
                  onBlur={(e) => setMailContacto(e.target.value)}
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>
                  <BStyle>Mensaje</BStyle>
                </Form.Label>
                <div>
                  <TextAreaStyle 
                  type="text" 
                  placeholder="Tú mensaje aquí ^^" 
                  onBlur={(e) => setMensajeContacto(e.target.value)}
                  required />
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
