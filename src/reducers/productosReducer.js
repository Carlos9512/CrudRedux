import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS,CREAR_PRODUCTOS,MODIFICAR_PRODUCTOS } from "../actions/types"
import { stat } from "fs";
import { mostrarProductos } from "../actions/productosActions";

const estadoInicial = {
    productos: [        
    ]
}

export default function (state = estadoInicial, action) {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {...state, productos:action.payload};
            break;
        case ELIMINAR_PRODUCTOS: console.log(action.payload);
            let enviar = state.productos.filter(producto=> producto.id!==action.payload)
            return {...state, productos:enviar};
            break;

        case CREAR_PRODUCTOS: console.log(action.payload);
            let conver= action.payload;
            return {                  
                ...state,
                productos: [...state.productos,conver]
            };
            break;
        case MODIFICAR_PRODUCTOS: console.log(action.payload);
           const copia =state;
           let modificar= copia.productos.map((producto)=>{
               if (producto.id==action.payload.id) {
                   producto.name=action.payload.name;
                   producto.precio=action.payload.precio
               }
               return producto
            })
            return {...state, productos:modificar};
            break;
        
        default:
            return state;
            break;
    }
}   