import styled from "styled-components";
import ImgComikeate from "../../../img/productos/personalizaciones/IMG_20210310_215728_884.jpg";
import ImgTextil from "../../../img/productos/textil/sudadera.jpg";
import ImgCeramica from "../../../img/productos/ceramica/taza.jpg";
import ImgPapeleria from "../../../img/productos/papeleria/postal.jpg";
import ImgMadera from "../../../img/productos/madera/cuelgaPuertaPokemnmon.jpg";
import ImgLienzos from "../../../img/productos/lienzos/lienzoSW.jpg";

export const BodyDiv = styled.div `
    background-color: orange;
    height: auto;
    width: 82vh;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
        width: 100%;
      }
`

export const CartsDiv = styled.div `
    width: 100%;
`

export const CartDivComikeate = styled.div `
    display: block;
    width: 90%;
    height: 380px;
    margin: 2rem 0 0 1rem;
    transition: background-color .5s;
    background-color: Crimson;

@media (min-width: 768px) {
    display: inline-block;
    width: 30%;
    height: 280px;
  }

  @media (min-width: 1024px) {
    height: 400px;
    margin: 2rem 0 2rem 1rem;
    transition: background-color .5s;
    background-color: black;
    &:hover {
        background-color: Crimson;
    }
  }
   
`

export const ImgStyleComikeate = styled.div `
    width: 100%;
    height: 85%;
    background-image: url(${ImgComikeate});
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: 100%;

    @media (min-width: 768px) {
        height: 100%;
        background-position: top;
        background-size: 100%;
    }

`

export const TitleCart = styled.h1 `
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-top: 15px;
@media (min-width: 768px) {
    margin-top: -37px;
  }

  @media (min-width: 1024px) {
    color: white;
    margin-top: -60px;
    transition: color .2s;
    font-size: 35px;
    &:hover {
        color: black;
    }
  }
   
`

export const CartDivTextil = styled(CartDivComikeate) `
    background-color: ForestGreen;

  @media (min-width: 1024px) {
    background-color: black;
    &:hover {
        background-color: ForestGreen;
    }
  }
    
`

export const ImgStyleTextil = styled(ImgStyleComikeate) `
    background-image: url(${ImgTextil});
`

export const CartDivCeramica = styled(CartDivComikeate) `
    background-color: DeepPink;

  @media (min-width: 1024px) {
    background-color: black;
    &:hover {
        background-color: DeepPink;
    }
  }
`

export const ImgStyleCeramica = styled(ImgStyleComikeate) `
    background-image: url(${ImgCeramica});
`

export const CartDivPapeleria = styled(CartDivComikeate) `
    background-color: cyan;

  @media (min-width: 1024px) {
    background-color: black;
    &:hover {
        background-color: cyan;
    }
  }
`

export const ImgStylePapeleria = styled(ImgStyleComikeate) `
    background-image: url(${ImgPapeleria});
`

export const CartDivMadera = styled(CartDivComikeate) `
    background-color: yellow;

  @media (min-width: 1024px) {
    background-color: black;
    &:hover {
        background-color: yellow;
    }
  }
`

export const ImgStyleMadera = styled(ImgStyleComikeate) `
    background-image: url(${ImgMadera});
`

export const CartDivLienzos = styled(CartDivComikeate) `
    background-color: Coral;

  @media (min-width: 1024px) {
    background-color: black;
    &:hover {
        background-color: Coral;
    }
  }
`

export const ImgStyleLienzos = styled(ImgStyleComikeate) `
    background-image: url(${ImgLienzos});
`