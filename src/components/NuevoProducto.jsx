import React, { Component} from 'react'
import { Form, Col, Row, Button } from "react-bootstrap";
import {agregarProducto} from "../actions/productosActions"
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class NuevoProducto extends Component {


    state = { nombre: "", precio: 0};

    changeInput = e => {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    };

    guardarCambios =() =>{
        console.log("guardar")
        this.props.agregarProducto(this.state)
        this.props.history.push("/");
    }
    
    render() {      

        return (
            <div>
                <center>
                    <h2>Agregar un nuevo producto</h2>
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
                                    <Form.Control required type="text" placeholder="nombre" name="nombre" onChange={this.changeInput} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="precio">
                                <Form.Label column sm="2">
                                    Precio
                        </Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="number" placeholder="precio" name="precio" onChange={this.changeInput} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <center>  
                            <Button variant="success" onClick={this.guardarCambios}>Agregar</Button>
                            <Link to="/"><Button variant="danger">Cancelar</Button></Link> 
                        </center>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </div>
        )
    }
}
 
export default connect(null, { agregarProducto })(NuevoProducto);