/* eslint-disable react/function-component-definition */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/components/Checkout.css';
import AppContext from "../context/AppContext";

// eslint-disable-next-line arrow-body-style
const Checkout = ()=>{
    const { state: { cart }, removeFromCart } = useContext(AppContext);

    const handlerRemove = product =>{
        removeFromCart(product);
    }

    const handlerSumTotal = ()=>{
        const reducer   = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum       = cart.reduce(reducer,0);
        return sum;
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length>0?<h3>Lista de Pedidos:</h3>:<h3>Sin pedidos</h3>}
                {cart.map(item=>(
                    <div key={item.id} className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                        <button type="button" onClick={()=>handlerRemove(item)}>
                            <i className="fas fa-trash-alt" title="eliminar"/>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length>0 && (
                <div className="Checkout-sidebar">
                    <h3>Precio Total: ${handlerSumTotal()}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default Checkout;