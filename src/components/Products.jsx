/* eslint-disable react/function-component-definition */
import React from 'react'
import Product from './Product'
import '../styles/components/Products.css'

// eslint-disable-next-line arrow-body-style
const Products = ({products}) => {
    return (
        <div className='Products'>
            <div className="Products-items">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
            </div>
        </div>
    )
}

export default Products
