import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InstaImg from '../../img/logo e iconos/instagram.png';
import FaceImg from '../../img/logo e iconos/facebook.png';
import LogInActualResponsive from './hooks/LogInActualResponsive';
import {DivNavResponsive, IconoRRSS} from './style/styleNavResponsive';

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
                <Nav.Link href="/Home">HOME</Nav.Link>
                <Nav.Link href="/Comikeate">COMIKEATE</Nav.Link>
                <Nav.Link href="/Textil">TÉXTIL</Nav.Link>
                <Nav.Link href="/Regalos">REGALOS</Nav.Link>
                <Nav.Link href="/Madera">MADERA</Nav.Link>
                <Nav.Link href="/Lienzos">LIENZOS</Nav.Link>
                <Nav.Link href="/Contactanos">CONTACTANOS</Nav.Link>
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