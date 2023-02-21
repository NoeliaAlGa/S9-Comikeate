import { Link } from "react-router-dom";
import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import {CartsDiv, CartDivComikeate, BodyDiv, ImgStyleComikeate, TitleCart, CartDivTextil, ImgStyleTextil, CartDivCeramica, ImgStyleCeramica, CartDivMadera, ImgStyleMadera, CartDivLienzos, ImgStyleLienzos } from "../pages/style/HomeStyle";

const Home = () => {

return (<BodyDiv>
            <Head />
            <Nav />
            <NavResponsive />
            <CartsDiv>
                <CartDivComikeate>
                    <ImgStyleComikeate />
                    <Link to="/Comikeate" style={{ textDecoration: 'none' }}>
                        <TitleCart>COMIKEATE</TitleCart>
                    </Link>
                </CartDivComikeate>
                <CartDivTextil>
                    <ImgStyleTextil />
                    <Link to="/Textil" style={{ textDecoration: 'none' }}>
                        <TitleCart>TÉXTIL</TitleCart>
                    </Link>
                </CartDivTextil>
                <CartDivCeramica>
                    <ImgStyleCeramica />
                    <Link to="/Regalos" style={{ textDecoration: 'none' }}>
                        <TitleCart>REGALOS</TitleCart>
                    </Link>
                </CartDivCeramica>
                <CartDivMadera>
                    <ImgStyleMadera />
                    <Link to="/Madera" style={{ textDecoration: 'none' }}>
                        <TitleCart>MADERA</TitleCart>
                    </Link>
                </CartDivMadera>
                <CartDivLienzos>
                    <ImgStyleLienzos />
                    <Link to="/Lienzos" style={{ textDecoration: 'none' }}>
                        <TitleCart>LIENZOS</TitleCart>
                    </Link>
                </CartDivLienzos>
            </CartsDiv>
            <Footer />
        </BodyDiv>)
}
export default Home;