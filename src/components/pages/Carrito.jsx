import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Table from "react-bootstrap/Table";
import { BodyDiv } from "./style/HomeStyle";
import { CardsDiv, TitleStyle } from "./style/GenericStyle";

const Carrito = () => {
  return (
    <BodyDiv>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>Carrito</TitleStyle>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </CardsDiv>
      <Footer />
    </BodyDiv>
  );
};
export default Carrito;
