import React, { Component} from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import {modificarProducto,mostrarProductos} from "../actions/productosActions"
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class EditarProducto extends Component {


    state = { nombre: "", precio: 0};
    

    changeInput = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    
    componentDidMount(){
        this.props.mostrarProductos(); 
        const { productos } = this.props;
        const productoModificar=productos.filter(producto=> producto.id==this.props.match.params.id)
        console.log(productos,productoModificar[0].nombre)
        this.setState({ ["nombre"] : productoModificar[0].nombre,["precio"]:productoModificar[0].precio});
    } 

    modificarProducto =(id) =>{
        console.log("guardar")
        this.props.modificarProducto(id,this.state).then(() => {
            this.props.history.push("/");
        })        
    }
    
    render() {
            
        const idEditar=this.props.match.params.id;
        
        return (
            <div>
                <center>
                    <h2>Modificar el producto {idEditar}</h2>
                    <br />
                </center>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Form>
                            <Form.Group as={Row} controlId="nombre">
                                <Form.Label column sm="2">
                                    Nombre
                        </Form.Label>
                                <Col sm="10">
                                    <Form.Control value={this.state.nombre} required type="text" placeholder="nombre" name="nombre" onChange={this.changeInput} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="precio">
                                <Form.Label column sm="2">
                                    Precio
                        </Form.Label>
                                <Col sm="10">
                                    <Form.Control value={this.state.precio} required type="number" placeholder="precio" name="precio" onChange={this.changeInput} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <center> 
                            <Button variant="success" onClick={() => { this.modificarProducto(idEditar) }}>Modificar</Button>
                            <Link to="/"><Button variant="danger">Cancelar</Button></Link> 
                        </center>

                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </div>
        )
    }
}
 
const mapStateToProp = (state) => {
    return {
      productos: state.productos.productos
    }
}

export default connect(mapStateToProp, {modificarProducto,mostrarProductos})(EditarProducto);