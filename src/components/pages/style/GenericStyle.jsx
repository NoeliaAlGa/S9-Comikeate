import styled from "styled-components";

export const CardsDiv = styled.div `
      margin: 1rem;
      @media (min-width: 768px) {
        margin: 2rem;
      }  
`

export const CardStyle = styled.div`
    display: block;
    width: 100%;
    margin: 0;

@media (min-width: 768px) {
    display: flex;
    width: 100%;
    margin: 0;
  }
`

export const ImgCard = styled.img`
width: 100%;
object-fit:cover;
object-position:center;

@media (min-width: 768px) {
    object-position:center;
    object-fit:cover;
}
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
export const TitleCards = styled.h2`
    color: black;
    text-align: center;
    font-size: 30px;
`
export const TextCards = styled.h2`
    color: black;
    text-align: justify;
    font-size: 16px;
`
export const PrecioCards = styled(TextCards)`
    margin-top: 2rem;
    font-size: 24px;
    text-align: center;
`

export const BodyComikeate = styled.div `
    background-color: Crimson;
    height: 100%;
    width: 100%;
    padding-bottom: 2rem;
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
    background-color: rgb(255, 195, 0);
`
export const BodyLienzos = styled(BodyComikeate) `
    background-color: Coral;
`
export const BodyContactanos = styled(BodyComikeate) `
    background-color: BlueViolet;
`
export const BodyLogIn = styled(BodyComikeate) `
    background-color: Crimson;
`

export const BodySignUp = styled(BodyComikeate) `
    background-color: rgb(255, 195, 0);
`