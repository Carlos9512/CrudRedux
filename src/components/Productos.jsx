import React from 'react';
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productosActions";
import Producto from './Producto';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Productos extends React.Component {

  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const { productos } = this.props;
    console.log(productos)
    return (
      <div >
        <Table responsive hover >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => {
              return (
                <Producto key={index} producto={producto}></Producto>
              )
            })}
          </tbody>
        </Table>
        <br/>
        <center>
          <Link to="/agregarProducto">
            <Button variant="outline-success" >Agregar Producto</Button></Link>
        </center>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    productos: state.productos.productos
  }
}

export default connect(mapStateToProp, { mostrarProductos })(Productos);
