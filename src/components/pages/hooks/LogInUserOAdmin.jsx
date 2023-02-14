import React from 'react'
import { Link } from "react-router-dom";
import BuscarUsuarios from "./BuscarUsuarios";
import Button from "react-bootstrap/Button";

const LogInUserOAdmin = ({nombreUsuario, contraseñaUsuario}) => {
  
  const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));
  
  if(actualLogIn !==null && actualLogIn[0].nombre !== "Admin") {
    return (<>
            <Link to="/MenuUser">
              <Button variant="warning" type="submit" onClick={() =>
                BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>
                <b>LOG IN</b>
              </Button>
            </Link>
            </>)
    }
    else if(actualLogIn !==null && actualLogIn[0].nombre === "Admin" && actualLogIn[0].contraseña === "Admin") {
      return (<>
              <Link to="/MenuAdmin">
                <Button variant="warning" type="submit" onClick={() =>
                  BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>
                  <b>LOG IN</b>
                </Button>
              </Link>
              </>)
      }
    else {
      return (<>
        <Link to="/SignUp">
          <Button variant="warning" type="submit" onClick={() =>
            BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>
            <b>LOG IN</b>
          </Button>
        </Link>
        </>)
    }

}

export default LogInUserOAdmin