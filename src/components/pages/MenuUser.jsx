import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Table from "react-bootstrap/Table";
import { CardsDiv, TitleStyle } from "./style/GenericStyle";
import { BodyDivAdminUser, DivNoPedidos, UlStyle, TablaMDXL, TablaSM } from "./style/MenuUserAdminStyle";

const MenuUser = () => {
  debugger;
  const listaPedidos =
    window.localStorage.getItem("listaPedidos") === null
      ? []
      : JSON.parse(window.localStorage.getItem("listaPedidos"));

    const pedidosListaInicio = listaPedidos.length === 0 
        ?<DivNoPedidos>
            <p>No hay pedidos para mostrar</p>
        </DivNoPedidos>
        : <></> ;

  const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));

  const pedidosUsuarioActual = listaPedidos.filter(
    (pedido) => pedido.nombreCliente === actualLogIn.nombre
  );


  return (
    <BodyDivAdminUser>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>Menú Usuario</TitleStyle>
        <TablaMDXL>
          <Table responsive="md" hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nº Pedido</th>
                <th>Productos</th>
                <th>Fecha compra</th>
              </tr>
            </thead>
            <tbody>
                {pedidosUsuarioActual.map((pedido, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td key="numPedido">{pedido.numPedido}</td>
                    <td key="listaPedido">
                      <UlStyle>
                        {pedido.pedido.map((producto) => (
                          <li key={producto.nombre}>
                            {producto.nombre}, {producto.cantidad}/u,{" "}
                            {producto.precio}€/u
                          </li>
                        ))}
                        <li key={index}><b>Observaciones:</b></li>
                        <li key={pedido.pedido.lenght}> {pedido.observaciones}</li>
                      </UlStyle>
                    </td>
                    <td key="fechaPedido">{pedido.fechaPedido}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </TablaMDXL>
        <TablaSM>
          <Table responsive="sm" hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Pedido</th>
              </tr>
            </thead>
            <tbody>
                {pedidosUsuarioActual.map((pedido, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td key="numPedido">
                      <UlStyle>
                        <li key={pedido.numPedido}>
                          <b>Nº Pedido:</b> {pedido.numPedido}
                        </li>
                        <li key={pedidosUsuarioActual.lenght}>
                          <b>Productos:</b>
                        </li>
                        {pedido.pedido.map((producto) => (
                          <li key={producto.nombre}>
                            {producto.nombre}, {producto.cantidad}/u,{" "}
                            {producto.precio}€/u
                          </li>
                        ))}
                        <li key={index}><b>Observaciones:</b> </li>
                        <li key={pedido.pedido.lenght}>{pedido.observaciones}</li>
                        <li>
                          <b>Fecha Pedido:</b> {pedido.fechaPedido}
                        </li>
                      </UlStyle>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </TablaSM>
      </CardsDiv>
      <>{pedidosListaInicio}</>
      <Footer />
    </BodyDivAdminUser>
  );
};
export default MenuUser;
