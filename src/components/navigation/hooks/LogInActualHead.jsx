import { Link } from "react-router-dom";
import {LogOutButtons, NombreLogIn} from '../style/styleNavResponsive';
import { LogIn, SignUp, DivLogIn} from '../style/styleHead'

const LoguinActual =() => {
    const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));
  
    if(actualLogIn !==null && actualLogIn.nombre !== "Admin") {
      return (<DivLogIn>
                <Link to="/MenuUser" style={{ textDecoration: 'none' }}>🏠</Link>
                <NombreLogIn>{actualLogIn.nombre}</NombreLogIn>
                <Link to="/LogIn"><LogOutButtons onClick={()=> {
                    localStorage.removeItem("LogedUser");
                }}>LOG OUT</LogOutButtons>
                </Link>
                <Link to="/Carrito" style={{ textDecoration: 'none' }}>🛒</Link>
              </DivLogIn>)
    }
    else if(actualLogIn !==null && actualLogIn.nombre === "Admin" && actualLogIn.contraseña === "Admin") {
      return (<DivLogIn>
                <Link to="/MenuAdmin" style={{ textDecoration: 'none' }}>🏠 </Link>
                <NombreLogIn>{actualLogIn.nombre}</NombreLogIn>
                <Link to="/LogIn"><LogOutButtons onClick={()=> {
                    localStorage.removeItem("LogedUser");
                }}>LOG OUT</LogOutButtons>
                </Link>
              </DivLogIn>)
    }
    else {
      return (<DivLogIn>
                <Link to="/LogIn"><LogIn>LOG IN</LogIn></Link>
                <Link to="/SignUp"><SignUp>SIGN UP</SignUp></Link>
                <Link to="/Carrito" style={{ textDecoration: 'none' }}>🛒</Link>
            </DivLogIn>)
    }
  }

  export default LoguinActual;