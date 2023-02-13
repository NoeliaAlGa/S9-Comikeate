import logoComikeate from '../../img/logo e iconos/logo.png';
import { DivHead,Logo} from './style/styleHead'
import LoguinActual from './hooks/LogInActualHead';

const Head = () => {

    return (
      <DivHead>
        <Logo src={logoComikeate} alt='Comikeate'></Logo>
          <LoguinActual/>
      </DivHead>
    );
  }
  
  export default Head;