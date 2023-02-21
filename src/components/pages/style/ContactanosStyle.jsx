import styled from "styled-components";

export const DivFormStyle = styled.div`
    margin-top: 2rem;
    display: block;
    text-align: center;
    @media (min-width: 768px) {
        display: flex;
        margin-top: 2rem;
        align-items: center;
        justify-content: center;
    }
    
`

export const DivForm = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 50%;
      }

`
export const ImgContactStyle = styled.img `
    display: none;
    @media (min-width: 768px) {
        display: inline;
        margin: -30px 0 0 3rem;
        height: 45vh;
        float:left;
        border: 5px solid rgb(255, 195, 0);
      }
`

export const TextAreaStyle = styled.textarea `
    height: 100px;
    width: 100%;
`

export const BStyle = styled.b `
    color:black;
`