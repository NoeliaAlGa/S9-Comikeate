import styled from "styled-components";
import ImgComikeate from "../../../img/productos/personalizaciones/familiabebe.jpg";
import ImgTextil from "../../../img/productos/textil/bolsa cruela.jpg";
import ImgCeramica from "../../../img/productos/regalos/taza.jpg";
import ImgMadera from "../../../img/productos/madera/cuelgaPuertaPokemnmon.jpg";
import ImgLienzos from "../../../img/productos/lienzos/acuarelaSW.jpg";

export const BodyDiv = styled.div `
    background-color: orange;
    height: 100%;
    width: 100%;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
        width: 100%;
        padding-bottom: 2rem;
      }
`

export const CartsDiv = styled.div `
    width: 100%;
`

export const CartDivComikeate = styled.div `
    display: block;
    width: 90%;
    height: 350px;
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
    @media (min-width: 1200px) {
      height: 85%;
      background-position: center;
      background-size: 100%;
  }
`

export const TitleCart = styled.h1 `
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-top: 13px;
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
  @media (min-width: 1200px) {
    margin-top: 10px;
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


export const CartDivMadera = styled(CartDivComikeate) `
    background-color: rgb(255, 195, 0);

  @media (min-width: 1024px) {
    background-color: black;
    &:hover {
        background-color: rgb(255, 195, 0);
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