import React, { useState } from "react";
import Head from "../../components/navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import imgSignUp from "../../img/productos/personalizaciones/perrito.jpg";
import Button from "react-bootstrap/Button";
import GuardarSignUp from "../pages/hooks/GuardarSignUp";
import { BodySignUp, TitleStyle, CardsDiv } from "../pages/style/GenericStyle";
import {
  DivLogInSignUp,
  LabelsLogInSignUp,
  ImgSignUp,
  StyleForm,
  TextInformation,
  InformationRegistered,
  DivLISUStyle,
} from "./style/LogInSignUpStyle";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");

const handleInput = (e, nombreInput) => {
  if(nombreInput === "nombreUsuario") {
    setNombreUsuario(e.target.value);
  }
  if(nombreInput === "emailUsuario") {
    setEmailUsuario(e.target.value);
  }
  if(nombreInput === "contraseñaUsuario") {
    setContraseñaUsuario(e.target.value);
  }
}

  const toLogedUser =
    window.localStorage.getItem("LogedUser") === undefined
    ? <Link to="/SignUp">
        <Button variant="primary" type="submit" onClick={() => GuardarSignUp(nombreUsuario, emailUsuario, contraseñaUsuario)}>
        <b>SIGN UP</b>
        </Button>
      </Link>
    : <Link to="/MenuUser">
        <Button variant="primary" type="submit" onClick={() => GuardarSignUp(nombreUsuario, emailUsuario, contraseñaUsuario)}>
        <b>SIGN UP</b>
        </Button>
      </Link>

  return (
    <BodySignUp>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>SIGN UP</TitleStyle>
        <DivLISUStyle>
          <ImgSignUp src={imgSignUp} alt="Comikeate"></ImgSignUp>
          <StyleForm>
            <DivLogInSignUp>
              <LabelsLogInSignUp>Nombre </LabelsLogInSignUp>
              <input
                type="text"
                placeholder="Introduce tu nombre"
                onChange={(e) => handleInput(e, "nombreUsuario")}
              />
            </DivLogInSignUp>
            <DivLogInSignUp>
              <LabelsLogInSignUp >Email </LabelsLogInSignUp>
              <input 
                type="email" 
                placeholder="Introduce tu mail"
                onChange={(e) => handleInput(e, "emailUsuario")}
                />
            </DivLogInSignUp>
            <DivLogInSignUp>
              <LabelsLogInSignUp>
                Contraseña
              </LabelsLogInSignUp>
              <input
                type="password"
                placeholder="Introduce tu contraseña"
                onChange={(e) => handleInput(e, "contraseñaUsuario")}
              />
            </DivLogInSignUp>
            <TextInformation>
              * Registrarse és obligatorio para hacer la compra.
            </TextInformation>
            <>{toLogedUser}</>
            <div>
              <InformationRegistered>
                Ya estás registrado?
              </InformationRegistered>
              <Link to="/LogIn">
                <Button variant="primary" type="submit" >
                  <b>LOG IN</b>
                </Button>
              </Link>
            </div>
          </StyleForm>
        </DivLISUStyle>
      </CardsDiv>
      <Footer />
    </BodySignUp>
  );
};

export default SignUp;
