// import React, { useState} from "react";
import Head from "../../components/navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import imgSignUp from "../../img/productos/personalizaciones/perrito.jpg";
import Button from "react-bootstrap/Button";
import { BodySignUp, TitleStyle, CardsDiv } from "../pages/style/GenericStyle";
import {
  DivLogInSignUp,
  LabelsLogInSignUp,
  ImgSignUp,
  StyleForm,
  TextInformation,
  InformationRegistered,
  DivLISUStyle
} from "./style/LogInSignUpStyle";
import { Link } from "react-router-dom";

const SignUp = () => {
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
              <input type="text" placeholder="Introduce tu nombre" />
            </DivLogInSignUp>
            <DivLogInSignUp>
              <LabelsLogInSignUp>Email </LabelsLogInSignUp>
              <input type="email" placeholder="Introduce tu mail" />
            </DivLogInSignUp>
            <DivLogInSignUp>
              <LabelsLogInSignUp>Contraseña </LabelsLogInSignUp>
              <input type="password" placeholder="Introduce tu contraseña" />
            </DivLogInSignUp>
            <TextInformation>
              * Registrarse és obligatorio para hacer la compra.
            </TextInformation>
            <Link to="/SignUp">
              <Button variant="primary" type="submit">
                <b>SIGN UP</b>
              </Button>
            </Link>
            <div>
              <InformationRegistered>
                Ya estás registrado?
              </InformationRegistered>
              <Link to="/LogIn">
                <Button variant="primary" type="submit">
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
