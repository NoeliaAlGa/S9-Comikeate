import logoComikeate from '../../img/logo e iconos/logo.png';
import { DivHead,Logo, LogIn, DivLogIn} from './style/styleHead'
import { Link } from "react-router-dom";

const Head = () => {
  
    return (
      <DivHead>
        <Logo src={logoComikeate} alt='Comikeate'></Logo>
        <DivLogIn>
          <Link to="/LogInUser"><LogIn>LOG IN</LogIn></Link>
          ||
          <Link to="/SignUp"><LogIn>SIGN UP</LogIn></Link>
        </DivLogIn>
      </DivHead>
    );
  }
  
  export default Head;