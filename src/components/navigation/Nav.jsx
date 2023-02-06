import React from 'react';
import {DivButtons} from './style/styleNav';
import {HomeButtons, ComikeateButtons, TextilButtons, CeramicaButtons, PapeleriaButtons, MaderaButtons, ContactanosButtons} from './style/styleNav';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <DivButtons>
            <Link to="/Home">
                <HomeButtons><b>HOME</b></HomeButtons>
            </Link>
            <Link to="/Comikeate/">
                <ComikeateButtons onClick="reload()"><b>COMIKEATE</b></ComikeateButtons>
            </Link>
            <Link to="/Textil/">
                <TextilButtons onClick="reload()"><b>TÉXTIL</b></TextilButtons>
            </Link>
            <Link to="/Ceramica/">
                <CeramicaButtons onClick="reload()"><b>CERÁMICA</b></CeramicaButtons>
            </Link>
            <Link to="/Papeleria/">
                <PapeleriaButtons onClick="reload()"><b>PAPELERÍA</b></PapeleriaButtons>
            </Link>
            <Link to="/Madera/">
                <MaderaButtons onClick="reload()"><b>MADERA</b></MaderaButtons>
            </Link>
            <Link to="/Contactanos/">
                <ContactanosButtons onClick="reload()"><b>CONTACTANOS</b></ContactanosButtons>
            </Link>
        </DivButtons>
    )
}
export default Nav;