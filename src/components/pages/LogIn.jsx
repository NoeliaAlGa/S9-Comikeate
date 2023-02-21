import React, { useState } from "react";
import Head from "../../components/navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import imgLogIn from "../../img/productos/personalizaciones/chica.jpg";
import { BodyLogIn, TitleStyle, CardsDiv } from "../pages/style/GenericStyle";
import {
  ImgLogIn,
  StyleForm,
  DivLISUStyle,
  TextInformation,
  InformationRegistered
} from "./style/LogInSignUpStyle";
import BuscarUsuario from "./hooks/BuscarUsuario";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import GuardarLogIn from "./hooks/GuardarLogIn";
import InputField from "./hooks/InputField";


const LogIn = () => {
 
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");

  const handleLogin = (e) => {
    const userEncontrado = BuscarUsuario(nombreUsuario, contraseñaUsuario);
    if (userEncontrado) {
      GuardarLogIn(nombreUsuario, contraseñaUsuario);
      if (nombreUsuario === "Admin") {
        window.location.href = "/MenuAdmin";
      } else {
        window.location.href = "/MenuUser";
      }
    } else {
      alert("Usuario no encontrado");
    }
  };

  return (
    <BodyLogIn>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>LOG IN</TitleStyle>
        <DivLISUStyle>
          <ImgLogIn src={imgLogIn} alt="Comikeate"></ImgLogIn>
          <StyleForm onSubmit={handleLogin}>
            <InputField
              label="Nombre:"
              type="text"
              value={nombreUsuario}
              placeholder="Introduce tu nombre"
              onChange={(e) => setNombreUsuario(e.target.value)
              }
            />
            <InputField
              label="Contraseña: "
              type="password"
              value={contraseñaUsuario}
              placeholder="Introduce tu contraseña"
              onChange={(e) => setContraseñaUsuario(e.target.value)}
            />
            <TextInformation>
              * Registrarse és obligatorio para hacer la compra.
            </TextInformation>
            <Button variant="warning" type="button" onClick={handleLogin}>
            <b>LOG IN</b>
            </Button>
            <InformationRegistered>
                No estas registrado?
              </InformationRegistered>
            <Link to="/SignUp">
              <Button variant="warning" type="button">
                <b>SIGN UP</b>
              </Button>
            </Link>
          </StyleForm>
        </DivLISUStyle>
      </CardsDiv>
      <Footer />
    </BodyLogIn>
  );
};

export default LogIn;
