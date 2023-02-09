import logoComikeate from '../../img/logo e iconos/logo.png';
import { DivHead,Logo, LogIn, SignUp, DivLogIn} from './style/styleHead'
import { Link } from "react-router-dom";

const Head = () => {
  
    return (
      <DivHead>
        <Logo src={logoComikeate} alt='Comikeate'></Logo>
        
        <DivLogIn>
          <Link to="/LogIn"><LogIn>LOG IN</LogIn></Link>
          <Link to="/SignUp"><SignUp>SIGN UP</SignUp></Link>
        </DivLogIn>
      </DivHead>
    );
  }
  
  export default Head;