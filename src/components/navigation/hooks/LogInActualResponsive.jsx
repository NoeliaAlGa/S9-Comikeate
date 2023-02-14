import React from 'react'
import { Link } from "react-router-dom";
import {LogOutButtons, NombreLogInResp} from '../style/styleNavResponsive';

const LogInActualResponsive = () => {
    debugger;
    const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));

  if(actualLogIn !==null && actualLogIn[0].nombre !== "Admin") {
    return (<>
                <Link to="/MenuUser" style={{ textDecoration: 'none' }}>🏠</Link>
                <NombreLogInResp>{actualLogIn[0].nombre}</NombreLogInResp>
                <Link to="/LogIn"><LogOutButtons onClick={()=> {localStorage.removeItem("LogedUser")} }>LOG OUT</LogOutButtons></Link>
            </>)
    }
    else if(actualLogIn !==null && actualLogIn[0].nombre === "Admin" && actualLogIn[0].contraseña === "Admin") {
        return (<>
                    <Link to="/MenuAdmin" style={{ textDecoration: 'none' }}>🏠</Link>
                    <NombreLogInResp>{actualLogIn[0].nombre}</NombreLogInResp>
                    <Link to="/LogIn"><LogOutButtons onClick={()=> {localStorage.removeItem("LogedUser")} }>LOG OUT</LogOutButtons></Link>
                </>)
        }
    else {
        return (
            <>
            <Link to="/LogIn" style={{ textDecoration: 'none' }}>👤</Link>
            </>
        )
    }
}

export default LogInActualResponsive