// import React, { useState} from "react";
import Head from '../../components/navigation/Head';
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import imgSignUp from "../../img/productos/personalizaciones/perrito.jpg";
import {DivLogInSignUp, BotonLogInSignUp, LabelsLogInSignUp, ImgLogInSignUp, DivLogInSignUpImg, StyleForm, H2LogInSignUp, TextInformation, InformationRegistered } from "../../components/pages/style/styleLogInSignUp";
import { Link } from "react-router-dom";

const SignUp = () => {

  return (
    <>
    <Head />
    <Nav />
    <NavResponsive />
    <DivLogInSignUpImg>
      <ImgLogInSignUp src={imgSignUp}  alt="Comikeate"></ImgLogInSignUp>
      <StyleForm>
        <H2LogInSignUp>SIGN UP</H2LogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Name </LabelsLogInSignUp>
          <input type="text" placeholder="Enter your name"/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Email address </LabelsLogInSignUp>
          <input type="email" placeholder="Enter email"/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Password </LabelsLogInSignUp>
          <input type="password" placeholder="Password"/>
        </DivLogInSignUp>
        <TextInformation>* Being registered is mandatory to see the information of the starships.</TextInformation>
        <Link to="/SignUp"><BotonLogInSignUp type="submit">SIGN UP</BotonLogInSignUp></Link>
        <div>
          <InformationRegistered>Are you registered?</InformationRegistered>
          <Link to="/LogIn"><BotonLogInSignUp type="submit">LOG IN</BotonLogInSignUp></Link>
        </div>
      </StyleForm>
    </DivLogInSignUpImg>
    </>
  );
};

export default SignUp;