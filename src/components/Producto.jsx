import React from 'react';
import { connect } from "react-redux";
import { eliminarProducto } from "../actions/productosActions";
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
 
class Producto extends React.Component {

  eliminar = (id) => {
    this.props.eliminarProducto(id);
  }

  render() {
    const { producto } = this.props;
    return (
      <tr>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td><Link to={`/editarProducto/${producto.id}`}><Button variant="outline-warning">Editar</Button></Link></td>
        <td><Button variant="outline-danger" onClick={() => { this.eliminar(producto.id) }}>Eliminar</Button></td>
      </tr>
    );
  }
}


export default connect(null, { eliminarProducto })(Producto);