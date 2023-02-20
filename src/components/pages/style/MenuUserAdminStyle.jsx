import styled from "styled-components";

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