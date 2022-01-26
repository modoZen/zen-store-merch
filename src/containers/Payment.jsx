/* eslint-disable react/function-component-definition */
import React, { useContext } from "react";
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext'
import { useNavigate } from "react-router-dom";
import '../styles/components/Payment.css';

// eslint-disable-next-line arrow-body-style
const Payment = ()=>{
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate();

    const paypalOptions = {
        clientId: 'AfICGoXr9Fy8878UX0tKwwnaN9uxsu9X-RAHamSGC9shcbpaUU5ucl-hLXBd7_kI_17M4NoJ79QKdMm1',
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data,
            };
            addNewOrder(newOrder);
            navigate('/checkout/success');
        }
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
    <div className="Payment">
        <div className="Payment-content">
            <h3>Resumen del pedido:</h3>
            {cart.map(item=>(
                <div className="Payment-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                </div>
            ))}
            <div className="Payment-button">
            <PayPalButton
                paypalOptions={paypalOptions}
                buttonStyles={buttonStyles}
                amount={handleSumTotal()}
                onPaymentStart={() => console.log('Start Payment')}
                onSuccess={(data) => handlePaymentSuccess(data)}
                onError={(error) => console.log(error)}
                onCancel={(data) => console.log(data)}
             />
                Boton de pago con Paypal
            </div>
        </div>
    </div>
    )
}
export default Payment;