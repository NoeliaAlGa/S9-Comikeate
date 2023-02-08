import styled from "styled-components";

export const CardsDiv = styled.div `
      margin: 2rem;
`

export const TitleStyle = styled.h1`
      font-weight: bold;
      color: white;
      text-align: left;
      background-color: black;
      width: fit-content;
      padding: 1rem 2rem 1rem 4rem;
      margin-left: -25px;
      border-radius: 0 20px 20px 0;
`

export const BodyComikeate = styled.div `
    background-color: Crimson;
    height: 100%;
    width: 82vh;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
        width: 100%;
      }
`
export const BodyTextil = styled(BodyComikeate) `
    background-color: ForestGreen;
`
export const BodyCeramica = styled(BodyComikeate) `
    background-color: DeepPink;
`
export const BodyPapeleria = styled(BodyComikeate) `
    background-color: cyan;
`
export const BodyMadera = styled(BodyComikeate) `
    background-color: yellow;
`
export const BodyLienzos = styled(BodyComikeate) `
    background-color: Coral;
`
export const BodyContactanos = styled(BodyComikeate) `
    background-color: BlueViolet;
`
export const DivFormStyle = styled.div`
      margin: 2rem;
      width: 50%;
`

export const DivTextForm = styled.div `
    height: 100%;
`