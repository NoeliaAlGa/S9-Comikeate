import styled from "styled-components";

export const BodyDivAdminUser = styled.div `
    background-color: orange;
    height: 100%;
    width: 100%;
    padding-bottom: 2rem;
    margin-bottom: -40px;
    @media (min-width: 768px) {
        width: 100%;
        padding-bottom: 2rem;
      }
`

export const DivNoPedidos = styled.div`
  height: 100px;
  @media (min-width: 768px) {
    height: 100px;
  }
`

export const UlStyle = styled.ul`
 list-style:none;
`

export const TablaMDXL = styled.div`
display: none;
width: 100%;
@media (min-width: 768px) {
  display: inline-block;
}
`

export const TablaSM = styled.div`
display: inline-block;
width: 100%;
@media (min-width: 768px) {
  display: none;
}
`