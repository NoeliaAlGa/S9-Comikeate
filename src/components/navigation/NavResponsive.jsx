import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InstaImg from '../../img/logo e iconos/instagram.png';
import FaceImg from '../../img/logo e iconos/facebook.png';
import LogInActualResponsive from './hooks/LogInActualResponsive';
import {DivNavResponsive, IconoRRSS} from './style/styleNavResponsive';
import {HomeButtons, ComikeateButtons, TextilButtons, CeramicaButtons, MaderaButtons, ContactanosButtons, LienzosButtons} from './style/styleNav';
import { Link } from "react-router-dom";

const NavResponsive = () => {


  return (
    <DivNavResponsive>
        <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
        <Container>
            <Navbar.Brand>
              <LogInActualResponsive />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link to="/Home" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>HOME</b></Link>
                <Link to="/Comikeate/" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>COMIKEATE</b></Link>
                <Link to="/Textil/" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>TÉXTIL</b></Link>
                <Link to="/Regalos/" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>REGALOS</b></Link>
                <Link to="/Madera/" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>MADERA</b></Link>
                <Link to="/Lienzos/" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>LIENZOS</b></Link>
                <Link to="/Contactanos/" style={{ textDecoration: 'none', color:'grey', margin: '10px'}}><b>CONTACTANOS</b></Link>
            </Nav>
            <Nav>
                <Nav.Link href="https://www.instagram.com/comikeate/" rel="noreferrer" target="_blank">
                    <IconoRRSS src={InstaImg} alt='instagram'></IconoRRSS>
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/comikeate/" rel="noreferrer" target="_blank">
                    <IconoRRSS src={FaceImg} alt='Facebook'></IconoRRSS>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </DivNavResponsive>
  );
}

export default NavResponsive;