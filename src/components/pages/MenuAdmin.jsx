import React from 'react'
import Head from "../navigation/Head";
import Nav from "../navigation/Nav";
import NavResponsive from "../navigation/NavResponsive";
import Footer from "../navigation/Footer";
import Table from "react-bootstrap/Table";
import { BodyDiv } from "./style/HomeStyle";
import { CardsDiv, TitleStyle } from "./style/GenericStyle";
import { UlStyle, TablaMDXL, TablaSM } from "./style/MenuUserAdminStyle";

const MenuAdmin = () => {
  const listaPedidos =
  window.localStorage.getItem("listaPedidos") === null
    ? []
    : JSON.parse(window.localStorage.getItem("listaPedidos"));

    return (
        <BodyDiv>
          <Head />
          <Nav />
          <NavResponsive />
          <CardsDiv>
            <TitleStyle>Menú Admin</TitleStyle>
            <TablaMDXL>
          <Table responsive="md" hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nº Pedido</th>
                <th>Nombre cliente</th>
                <th>Mail cliente</th>
                <th>Productos</th>
                <th>Fecha compra</th>
              </tr>
            </thead>
            <tbody>
                {listaPedidos.map((pedido, index) => (
                  <tr>
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
                {listaPedidos.map((pedido, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td key={index + 1}>
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
          <Footer />
        </BodyDiv>
      );
}

export default MenuAdmin