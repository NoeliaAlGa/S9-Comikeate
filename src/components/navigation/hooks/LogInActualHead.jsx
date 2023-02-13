import { Link } from "react-router-dom";
import {LogOutButtons, NombreLogIn} from '../style/styleNavResponsive';
import { LogIn, SignUp, DivLogIn} from '../style/styleHead'

const LoguinActual =() => {
    const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));
  
    if(actualLogIn !==null) {
      return (<DivLogIn>
                <Link to="/MenuUser" style={{ textDecoration: 'none' }}>🏠 </Link>
                <NombreLogIn>{actualLogIn[0].nombre}</NombreLogIn>
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
            </DivLogIn>)
    }
  }

  export default LoguinActual;