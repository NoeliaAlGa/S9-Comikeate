import styled from "styled-components";
import {Accordion} from 'react-bootstrap';

export const BodyDivAdminUser = styled.div `
    background-color: orange;
    height: 100%;
    width: 100%;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
        width: 100%;
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

// Style Admin
export const AcordeonStyle = styled(Accordion)`
  margin: 3rem 0rem 0rem 0rem;
  @media (min-width: 768px) {
    margin: 3rem 2rem 3rem 2rem;
  }
`