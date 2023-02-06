import { Link } from "react-router-dom";
import logoComikeate from '../../img/logo e iconos/logo.png';
import {LogoStyleWelcome, DivImg, TextWelcome} from './style/WelcomeStyle';

const Welcome = () => {

return (<div>
            <DivImg>
                <Link to="/Home" style={{ textDecoration: 'none' }}>
                    <TextWelcome>¡Regalos originales y 100% personalizados!</TextWelcome>
                    <LogoStyleWelcome src={logoComikeate} alt="Comikeate"></LogoStyleWelcome>
                </Link>
            </DivImg>
        </div>)
}
export default Welcome;
