
import styled from "styled-components";

export const DivLISUStyle =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgLogIn = styled.img `
    display: none;
    @media (min-width: 768px) {
        display: inline;
        margin: 1.5rem;
        height: 55vh;
        float:left;
        border: 5px solid rgb(255, 195, 0);
      }
`

export const ImgSignUp = styled(ImgLogIn) `
    border: 5px solid #0d6efd;
`

export const StyleForm = styled.form `
    padding-top:10px;
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
      }
`
export const TextInformation = styled.p `
    font-size: 10px;
    color: black;
    margin-top: 1rem;
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
      }
`
export const InformationRegistered = styled(TextInformation) `
    font-size: 12px;
    color: black;
    font-weight: bold;
    margin-left: 10px;
    
`

export const DivLogInSignUp = styled.div `
    margin: 1rem;
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
      }
`

export const LabelsLogInSignUp = styled.label `
    padding-right: 1rem;
    color: black;
    font-weight: bold;
`



