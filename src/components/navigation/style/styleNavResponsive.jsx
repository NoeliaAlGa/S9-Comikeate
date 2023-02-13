import styled from "styled-components";

export const DivNavResponsive = styled.div`
  display: inline-block;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`

export const IconoRRSS = styled.img `
width: 35px;
`

export const NombreLogIn = styled.p `
  margin-bottom: 0;
`

export const LogOutButtons = styled.button`
  font-weight: bold;
  background-color: black;
  color: rgb(255, 195, 0);
  cursor: pointer;
  font-size: 12px;
  border: none;
  @media (min-width: 768px) {
    font-size: 12px;
    width: 80px;
    height: 30px;
    transition: color .5s;
  }

  @media (min-width: 1024px) {
    width: 120px;
  }
    
    &:hover {
        color: white;
    }
`