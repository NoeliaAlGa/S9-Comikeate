import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Table from "react-bootstrap/Table";
import { BodyDiv } from "./style/HomeStyle";
import { CardsDiv, TitleStyle } from "./style/GenericStyle";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import añadirListaPedidos from "./hooks/añadirListaPedidos";
import borrarCarrito from "./hooks/BorrarCarrito";

const Carrito = () => {
  const elementosCarrito =
    window.localStorage.getItem("carrito") === null
      ? []
      : JSON.parse(window.localStorage.getItem("carrito"));

  let sumaTotal = elementosCarrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);

  const toLogedUser =
    window.localStorage.getItem("LogedUser") === undefined
    ? <Link to="/LogIn">
        <Button variant="primary" type="submit">
        <b>SIGN UP</b>
        </Button>
      </Link>
    : <Link to="/MenuUser"><Button variant="primary" type="submit" onClick={() => {
      añadirListaPedidos(elementosCarrito);
      borrarCarrito();
      alert("Pagado Correctamente");
    }}>
        <b>COMPRAR</b>
        </Button>
        </Link>
  return (
    <BodyDiv>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>Carrito</TitleStyle>
        <Table responsive>
          <thead>
            <tr key="1">
              <th>ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {elementosCarrito.map((producto, index) => {
              return (
                <tr key={index + 1}>
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
            <tr key="2">
              <td></td>
              <td></td>
              <td>
                <b>Total</b>
              </td>
              <td>{sumaTotal}€</td>
            </tr>
          </tbody>
        </Table>
        <>{toLogedUser}</>
      </CardsDiv>
      <Footer />
    </BodyDiv>
  );
};
export default Carrito;
