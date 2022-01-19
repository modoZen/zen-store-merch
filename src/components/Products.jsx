/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css'

// eslint-disable-next-line arrow-body-style
const Products = () => {
    const { state : { products }, addToCart } = useContext(AppContext);

    const handlerAddToCart = product=>{
        addToCart(product);
    }

    return (
        <div className='Products'>
            <div className="Products-items">
            {products.map(product => (
                <Product key={product.id} product={product} handlerAddToCart={handlerAddToCart} />
            ))}
            </div>
        </div>
    )
}

export default Products
