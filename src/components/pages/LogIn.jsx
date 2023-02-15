import React, { useState } from "react";
import Head from "../../components/navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import imgLogIn from "../../img/productos/personalizaciones/chica.jpg";
import { BodyLogIn, TitleStyle, CardsDiv } from "../pages/style/GenericStyle";
import { ImgLogIn, DivLISUStyle } from "./style/LogInSignUpStyle";
import BuscarUsuario from "./hooks/BuscarUsuario";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import GuardarLogIn from "./hooks/GuardarLogIn";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>
  );
};

const LoginButton = ({ onClick }) => {
  return (
    <Button variant="warning" type="submit" onClick={onClick}>
      Login
    </Button>
  );
};

const LogIn = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");

  // const handleInput = (e, nombreInput) => {
  //   if(nombreInput === "nombreUsuario") {
  //     setNombreUsuario(e.target.value);
  //   }
  //   if(nombreInput === "contraseñaUsuario") {
  //     setContraseñaUsuario(e.target.value);
  //   }
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    const userEncontrado = BuscarUsuario(nombreUsuario, contraseñaUsuario);
    if (userEncontrado) {
      GuardarLogIn(nombreUsuario, contraseñaUsuario);
      if (nombreUsuario === "Admin") {
        window.location.href = "/MenuAdmin";
      } else {
        window.location.href = "/MenuUser";
      }
    } else {
      alert("Usuario o contraseña inválidos");
    }
  };

  // const LogedUser =
  //   BuscarUsuario(nombreUsuario, contraseñaUsuario)
  //     ? <Link to="/Home">
  //       <Button variant="warning" type="submit" onClick={() => BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>
  //         <b>LOG IN</b>
  //       </Button>
  //     </Link>
  //     : <Link to="/LogIn">
  //       <Button variant="warning" type="submit" onClick={() => BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>
  //         <b>LOG IN</b>
  //       </Button>
  //     </Link>

  return (
    <BodyLogIn>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>LOG IN</TitleStyle>
        <DivLISUStyle>
          <ImgLogIn src={imgLogIn} alt="Comikeate"></ImgLogIn>
          <form onSubmit={handleLogin}>
            <InputField
              label="Username:"
              type="text"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <br />
            <InputField
              label="Password:"
              type="password"
              value={contraseñaUsuario}
              onChange={(e) => setContraseñaUsuario(e.target.value)}
            />
            <br />
            <LoginButton onClick={handleLogin} />
            <Link to='/SignUp'>
              <Button variant="warning" type="submit">
                <b>SIGN UP</b>
              </Button>
            </Link>
          </form>
          {/* <StyleForm>
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
              <>{LogedUser}</>
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
          </StyleForm> */}
        </DivLISUStyle>
      </CardsDiv>
      <Footer />
    </BodyLogIn>
  );
};

export default LogIn;

// const Login = () => {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const users = JSON.parse(localStorage.getItem('users')) || [];

// const handleLogin = (e) => {
//   e.preventDefault();
//   const user = users.find((u) => u.username === username && u.password === password);
//   if (user) {
//     // Redirect to main page
//     window.location.href = '/mainPage';
//   } else {
//     alert('Invalid username or password');
//   }
// };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <InputField label="Username:" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <br />
//         <InputField label="Password:" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br />
//         <LoginButton onClick={handleLogin} />
//       </form>
//     </div>
//   );
// };

// export default Login;
