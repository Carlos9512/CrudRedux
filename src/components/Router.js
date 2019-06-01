import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Productos from './Productos';
import NuevoProducto from './NuevoProducto';
import EditarProducto from './EditarProducto';


export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={()=>{
                        return <Productos></Productos>
                    }}/>
                    <Route path="/agregarProducto" component={NuevoProducto}/>
                    <Route path="/editarProducto/:id" component={EditarProducto}/>
                    {/* render={
                        (props)=>{
                            const {match}=props
                            return (<EditarProducto id={match.params.id}></EditarProducto>)
                        } */}
                    }/>                    
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
