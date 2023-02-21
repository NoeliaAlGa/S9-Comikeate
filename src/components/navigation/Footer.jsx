import {FooterStyle, IconoRRSSFooter} from './style/styleFooter';
import InstaImg from '../../img/logo e iconos/instagram.png';
import FaceImg from '../../img/logo e iconos/facebook.png';

const Footer = () => {
  
    return (
      <FooterStyle>
        <a href="https://www.instagram.com/comikeate/" rel="noreferrer" target="_blank"><IconoRRSSFooter src={InstaImg} alt='instagram'></IconoRRSSFooter></a>
        <a href="https://www.instagram.com/comikeate/" rel="noreferrer" target="_blank"><IconoRRSSFooter src={FaceImg} alt='Facebook'></IconoRRSSFooter></a>
      </FooterStyle>
    );
  }
  
  export default Footer;