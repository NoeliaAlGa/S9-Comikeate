import React from "react";
import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Table from "react-bootstrap/Table";
import { CardsDiv, TitleStyle } from "./style/GenericStyle";
import { UlStyle, TablaMDXL, TablaSM, AcordeonStyle, BodyDivAdminUser } from "./style/MenuUserAdminStyle";
import Accordion from "react-bootstrap/Accordion";

const MenuAdmin = () => {
  const listaPedidos =
    window.localStorage.getItem("listaPedidos") === null
      ? []
      : JSON.parse(window.localStorage.getItem("listaPedidos"));

  const listaMensajes =
      window.localStorage.getItem("mensajes") === null
        ? []
        : JSON.parse(window.localStorage.getItem("mensajes"));

  return (
    <BodyDivAdminUser>
      <Head />
      <Nav />
      <NavResponsive />
      <CardsDiv>
        <TitleStyle>Menú Admin</TitleStyle>
        <AcordeonStyle>
          <Accordion.Item eventKey="0">
            <Accordion.Header><b>Pedidos</b></Accordion.Header>
            <Accordion.Body>
              <TablaMDXL>
                <Table responsive="md" hover>
                  <thead>
                    <tr key="0">
                      <th>#</th>
                      <th>Nº Pedido</th>
                      <th>Nombre</th>
                      <th>Mail</th>
                      <th>Productos</th>
                      <th>Fecha compra</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaPedidos.map((pedido, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{pedido.numPedido}</td>
                        <td>{pedido.nombreCliente}</td>
                        <td>{pedido.mailCliente}</td>
                        <td key="listaPedido">
                          <UlStyle>
                            {pedido.pedido.map((producto) => (
                              <li key={producto.nombre}>
                                {producto.nombre}, {producto.cantidad}u,
                                {producto.precio}€/u
                              </li>
                            ))}
                            <li key={index}>
                              <b>Observaciones:</b>
                            </li>
                            <li key={pedido.pedido.lenght}>
                              {" "}
                              {pedido.observaciones}
                            </li>
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
                    <tr key="0">
                      <th>#</th>
                      <th>Pedido</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaPedidos.map((pedido, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>
                          <UlStyle>
                            <li key={pedido.numPedido}>
                              <b>Nº Pedido:</b> {pedido.numPedido}
                            </li>
                            <li key={pedido.nombreCliente}>
                              <b>Nombre cliente:</b> {pedido.nombreCliente}
                            </li>
                            <li key={pedido.mailCliente}>
                              <b>Mail cliente:</b> {pedido.mailCliente}
                            </li>
                            <li key={listaPedidos.lenght}>
                              <b>Productos:</b>
                            </li>
                            {pedido.pedido.map((producto) => (
                              <li key={producto.nombre}>
                                {producto.nombre}, {producto.cantidad}u,
                                {producto.precio}€/u
                              </li>
                            ))}
                            <li key={index}>
                              <b>Observaciones:</b>{" "}
                            </li>
                            <li key={pedido.pedido.lenght}>
                              {pedido.observaciones}
                            </li>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><b>Mensajes Contactanos</b></Accordion.Header>
            <Accordion.Body>
            <TablaMDXL>
                <Table responsive="md" hover>
                  <thead>
                    <tr key="0">
                      <th>#</th>
                      <th>Mail</th>
                      <th>Mensaje</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaMensajes.map((mensaje, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{mensaje.mail}</td>
                        <td>{mensaje.mensaje}</td>
                        <td>{mensaje.fecha}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TablaMDXL>
              <TablaSM>
                <Table responsive="sm" hover>
                  <thead>
                    <tr key="0">
                      <th>#</th>
                      <th>Mensajes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaMensajes.map((mensaje, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>
                          <UlStyle>
                            <li key={mensaje.mail}>
                              <b>Mail:</b> {mensaje.mail}
                            </li>
                            <li key={mensaje.mensaje.length}>
                              <b>Mensaje:</b> {mensaje.mensaje}
                            </li>
                            <li key={mensaje.fecha}>
                              <b>Fecha:</b> {mensaje.fecha}
                            </li>
                            
                          </UlStyle>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TablaSM>
            </Accordion.Body>
          </Accordion.Item>
        </AcordeonStyle>
      </CardsDiv>
      <Footer />
    </BodyDivAdminUser>
  );
};

export default MenuAdmin;
