import React, {useState} from "react";
import Head from "../../components/navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import BuscarUsuarios from "./hooks/BuscarUsuarios";
import Button from "react-bootstrap/Button";
import imgLogIn from "../../img/productos/personalizaciones/chica.jpg";
import { BodyLogIn, TitleStyle, CardsDiv } from "../pages/style/GenericStyle";
import {
  DivLogInSignUp,
  LabelsLogInSignUp,
  ImgLogIn,
  StyleForm,
  TextInformation,
  InformationRegistered,
  DivLISUStyle,
} from "./style/LogInSignUpStyle";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");

  const handleInput = (e, nombreInput) => {
    if(nombreInput === "nombreUsuario") {
      setNombreUsuario(e.target.value);
    }
    if(nombreInput === "contraseñaUsuario") {
      setContraseñaUsuario(e.target.value);
    }
  }

 
  return (
    <BodyLogIn>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>LOG IN</TitleStyle>
        <DivLISUStyle>
          <ImgLogIn src={imgLogIn} alt="Comikeate"></ImgLogIn>
          <StyleForm>
            <DivLogInSignUp>
              <LabelsLogInSignUp>Nombre</LabelsLogInSignUp>
              <input type="text" placeholder="Introduce tu nombre" onChange={(e) => handleInput(e, "nombreUsuario")}/>
            </DivLogInSignUp>
            <DivLogInSignUp>
              <LabelsLogInSignUp>Contraseña</LabelsLogInSignUp>
              <input type="password" placeholder="Introduce tu contraseña" onChange={(e) => handleInput(e, "contraseñaUsuario")}/>
            </DivLogInSignUp>
            <TextInformation>
              * Registrarse és obligatorio para hacer la compra.
            </TextInformation>
            <Link to="/MenuUser">
              <Button variant="warning" type="submit" onClick={() =>
                BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>
                <b>LOG IN</b>
              </Button>
            </Link>
            <div>
              <InformationRegistered>
                No estas registrado?
              </InformationRegistered>
              <Link to="/SignUp">
                <Button variant="warning" type="submit">
                  <b>SIGN UP</b>
                </Button>
              </Link>
            </div>
          </StyleForm>
        </DivLISUStyle>
      </CardsDiv>
      <Footer />
    </BodyLogIn>
  );
};

export default LogIn;
