
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
    margin-left: 25px;
    @media (min-width: 768px) {
        margin-left: 150px;
      }
`

export const DivLogIn = styled.label `
    display: none;
    @media (min-width: 768px) {
        display: inline;
        float: right;
        background-color: black;
        width: 250px;
        height: 30px;
        position: relative;
        left: 25px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center; 
        border-top: 5px solid black;
        border-bottom: 5px solid black;
        border-radius: 10px 0 0 10px;
      }
`

export const LogIn = styled.button `
    font-size: 10px;
    font-weight: bold;
    background-color: black;
    border: none;
    color: white;
    cursor: pointer;
    width: 90px;
    height: 24px;
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

  