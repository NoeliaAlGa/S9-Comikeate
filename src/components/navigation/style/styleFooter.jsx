import styled from "styled-components";

export const FooterStyle = styled.footer`
    height: 40px;
    width: 105%;
    background-color: black;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    @media (min-width: 768px) {
        width: 102%;
        margin-top: 1rem;
      }
      @media (min-width: 1200px) {
        width: 102%;
        
      }
`

export const IconoRRSSFooter = styled.img`
    height: 30px;
    margin-right: 1rem;
`