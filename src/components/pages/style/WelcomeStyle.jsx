import styled from "styled-components";

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
`