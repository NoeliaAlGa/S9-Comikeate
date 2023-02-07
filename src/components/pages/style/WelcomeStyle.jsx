import styled from "styled-components";
import fondoHead from "../../../img/logo e iconos/fondoHead.jpg"

export const DivWelcome= styled.div `
    background-image: url(${fondoHead});
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: 100% 60vh;
`

export const DivImg = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    text-align: center;
`

export const LogoStyleWelcome = styled.img `
    width: 90%;
    transition: width .5s;
    &:hover {
        width: 100%;
    }
`

export const TextWelcome = styled.p `
    font-weight: bold;
    color: black;
    font-size: 13px;

      @media (min-width: 768px) {
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        font-size: 20px;
      }
`