
import styled from "styled-components";
import fondoHead from "../../../img/logo e iconos/fondoHead.jpg"

export const DivHead = styled.div `
    padding: 2rem 2rem 1rem 1rem;
    background-image: url(${fondoHead});
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;
`

export const Logo = styled.img `
    width: 250px;
    margin-left: 150px;
`

export const DivLogIn = styled.label `
    float: right;
    background-color: black;
    width: 200px;
    height: 30px;
    position: relative;
    left: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center; 
    border-top: 3px solid black;
    border-bottom: solid black;
`

export const LogIn = styled.button `
    font-size: 10px;
    font-weight: bold;
    background-color: black;
    border: none;
    color: white;
    cursor: pointer;
    width: 90px;
    height: 30px;
    border-right: solid Crimson; 
    &:hover {
        color: black;
        background-color: Crimson;
    }
`
export const SignUp = styled(LogIn) `
    border-left: solid yellow; 
    border-right: none;
    &:hover {
        color: black;
        background-color: yellow;
    }
`

  