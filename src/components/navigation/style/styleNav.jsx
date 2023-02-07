import styled from "styled-components";

export const DivButtons = styled.nav `
    border-top: solid black;
    border-bottom: solid black;
    background-color: black;
`

export const NavButtons = styled.button`
@media (min-width: 768px) {
    font-size: 12px;
    width: 80px;
    height: 30px;
    font-weight: bold;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    transition: color .5s;
  }

  @media (min-width: 1024px) {
    width: 120px;
  }
    
    &:hover {
        color: black;
    }
`
export const HomeButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: orange;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: orange;
    }
  }
    
`
export const ComikeateButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: Crimson;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: Crimson;
    }
  }
   
`
export const TextilButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: ForestGreen;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: ForestGreen;
    }
  }
`
export const CeramicaButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: DeepPink;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: DeepPink;
    }
  }
`
export const PapeleriaButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: cyan;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: cyan;
    }
  }
`
export const MaderaButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: yellow;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: yellow;
    }
  }
`
export const LienzosButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: Coral;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: Coral;
    }
  }
`
export const ContactanosButtons = styled(NavButtons)`
@media (min-width: 768px) {
    color: BlueViolet;
  }

  @media (min-width: 1024px) {
    color: white;
    transition: background-color .5s;
    &:hover {
        background-color: BlueViolet;
    }
  }
`

