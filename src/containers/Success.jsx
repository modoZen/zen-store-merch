/* eslint-disable react/function-component-definition */
import React from "react";
import '../styles/components/Success.css';
// eslint-disable-next-line arrow-body-style
const Success = ()=>{
    return (
    <div className="Succes">
        <div className="Success-content">
            <h2>Max, Gracias por tu compra</h2>
            <span>Tu pedido llegara en 3 dias a tu dirección:</span>
            <div className="Success-map">Google Maps</div>
        </div>
    </div>
    )
}
export default Success;