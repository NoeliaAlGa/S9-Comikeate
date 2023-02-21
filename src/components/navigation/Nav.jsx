import React from 'react';
import {DivButtons} from './style/styleNav';
import {HomeButtons, ComikeateButtons, TextilButtons, CeramicaButtons, MaderaButtons, ContactanosButtons, LienzosButtons} from './style/styleNav';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <DivButtons>
            <Link to="/Home">
                <HomeButtons><b>HOME</b></HomeButtons>
            </Link>
            <Link to="/Comikeate/">
                <ComikeateButtons><b>COMIKEATE</b></ComikeateButtons>
            </Link>
            <Link to="/Textil/">
                <TextilButtons><b>TÉXTIL</b></TextilButtons>
            </Link>
            <Link to="/Regalos/">
                <CeramicaButtons><b>REGALOS</b></CeramicaButtons>
            </Link>
            <Link to="/Madera/">
                <MaderaButtons><b>MADERA</b></MaderaButtons>
            </Link>
            <Link to="/Lienzos/">
                <LienzosButtons><b>LIENZOS</b></LienzosButtons>
            </Link>
            <Link to="/Contactanos/">
                <ContactanosButtons><b>CONTACTANOS</b></ContactanosButtons>
            </Link>
        </DivButtons>
    )
}
export default Nav;