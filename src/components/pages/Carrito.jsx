import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Table from "react-bootstrap/Table";
import { BodyDiv } from "./style/HomeStyle";
import { CardsDiv, TitleStyle } from "./style/GenericStyle";

const Carrito = () => {
  const elementosCarrito =
    window.localStorage.getItem("carrito") === null
      ? []
      : JSON.parse(window.localStorage.getItem("carrito"));

  console.log("elementos Carrito.jsx: ", elementosCarrito);
  let sumaTotal = elementosCarrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);
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
              <th>ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {elementosCarrito.map((producto, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>
                    {producto.precio * producto.cantidad}€ ({producto.precio}
                    €/u)
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td>
                <b>Total</b>
              </td>
              <td>{sumaTotal}€</td>
            </tr>
          </tbody>
        </Table>
      </CardsDiv>
      <Footer />
    </BodyDiv>
  );
};
export default Carrito;
