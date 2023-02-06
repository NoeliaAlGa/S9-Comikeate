import styled from "styled-components";

export const DivButtons = styled.nav `
    border-top: solid black;
    border-bottom: solid black;
    background-color: black;
`

export const NavButtons = styled.button`
    font-size: 12px;
    width: 120px;
    height: 30px;
    font-weight: bold;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    transition: color .5s;
    &:hover {
        color: black;
    }
`
export const HomeButtons = styled(NavButtons)`
    transition: background-color .5s;
    &:hover {
        background-color: orange;
    }
`
export const ComikeateButtons = styled(NavButtons)`
    transition: background-color .5s;
    &:hover {
        background-color: Crimson;
    }
`
export const TextilButtons = styled(NavButtons)`
    &:hover {
        background-color: ForestGreen;
    }
`
export const CeramicaButtons = styled(NavButtons)`
    transition: background-color .5s;
    &:hover {
        background-color: DeepPink;
    }
`
export const PapeleriaButtons = styled(NavButtons)`
    transition: background-color .5s;
    &:hover {
        background-color: cyan;
    }
`
export const MaderaButtons = styled(NavButtons)`
    transition: background-color .5s;
    &:hover {
        background-color: yellow;
    }
`
export const ContactanosButtons = styled(NavButtons)`
    transition: background-color .5s;
    &:hover {
        background-color: BlueViolet;
    }
`

export const AStyle = styled.a `
    color: grey;
    text-decoration: none;
    &:hover {
        color: white;
    }
`

