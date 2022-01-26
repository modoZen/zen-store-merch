/* eslint-disable react/function-component-definition */
import React,{ useContext } from "react";
import AppContext from '../context/AppContext';
import Map from '../components/Map'
import '../styles/components/Success.css';
// eslint-disable-next-line arrow-body-style
const Success = ()=>{
    const { state } = useContext(AppContext);
    const { buyer } = state;

    return (
    <div className="Succes">
        <div className="Success-content">
            <h2>{buyer.name}, Gracias por tu compra</h2>
            <span>Tu pedido llegara en 3 dias a tu dirección:</span>
            <div className="Success-map">
                <Map />
            </div>
        </div>
    </div>
    )
}
export default Success;