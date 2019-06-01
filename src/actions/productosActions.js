import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS, CREAR_PRODUCTOS,MODIFICAR_PRODUCTOS } from "./types"
//axios
import axios from "axios";
import { async } from "q";
//


export const mostrarProductos = () => async dispatch=> {
    const respuesta = await axios.get('https://my-json-server.typicode.com/Carlos9512/Productosdb/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    });
}

export const eliminarProducto = (id) => async dispatch=> {
    const respuesta = await axios.delete('https://my-json-server.typicode.com/Carlos9512/Productosdb/productos/'+id);
    dispatch({
        type: ELIMINAR_PRODUCTOS,
        payload: id
    });
}

export const agregarProducto = (productoNuevo) => async dispatch=> {
    const respuesta = await axios.post('https://my-json-server.typicode.com/Carlos9512/Productosdb/productos/',productoNuevo);
    dispatch({
        type: CREAR_PRODUCTOS,
        payload: respuesta.data
    });
}

export const modificarProducto = (id,producto) => async dispatch=> {
    const respuesta = await axios.put('https://my-json-server.typicode.com/Carlos9512/Productosdb/productos/'+id,producto);
    dispatch({
        type: MODIFICAR_PRODUCTOS,
        payload: respuesta.data
    });
}
