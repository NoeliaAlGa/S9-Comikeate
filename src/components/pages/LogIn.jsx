// import React, {useState} from "react";
import Head from '../../components/navigation/Head';
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";

import imgLogIn from "../../img/productos/personalizaciones/chica.jpg"
import {DivLogInSignUp, BotonLogInSignUp, LabelsLogInSignUp, ImgLogInSignUp, DivLogInSignUpImg, StyleForm, H2LogInSignUp, TextInformation, InformationRegistered } from "../../components/pages/style/styleLogInSignUp";
import { Link } from "react-router-dom";

const LogInUser = () => {


  return (
    <>
    <Head />
    <Nav />
    <NavResponsive />
    <DivLogInSignUpImg>
      <ImgLogInSignUp src={imgLogIn}  alt="Comikeate"></ImgLogInSignUp>
      <StyleForm>
        <H2LogInSignUp>LOG IN</H2LogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Name</LabelsLogInSignUp>
          <input type="text" placeholder="Enter your name"/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Password</LabelsLogInSignUp>
          <input type="password" placeholder="Password" />
        </DivLogInSignUp>
        <TextInformation>* Being registered is mandatory to see the information of the starships.</TextInformation>
        <Link to="/LogIn"><BotonLogInSignUp type="submit">LOG IN</BotonLogInSignUp></Link>
        <div>
          <InformationRegistered>You not registered?</InformationRegistered>
          <Link to="/SignUp"><BotonLogInSignUp type="submit">SIGN UP</BotonLogInSignUp></Link>
        </div>
      </StyleForm>
    </DivLogInSignUpImg>
    </>
  );
};

export default LogInUser;
