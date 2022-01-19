/* eslint-disable react/function-component-definition */
import React from 'react'

// eslint-disable-next-line arrow-body-style
const Product = ({product}) => {
    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>
                {product.title}
                <span>
                    $
                    {' '}
                    {product.price}
                </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button">Comprar</button>
        </div>
    )
}

export default Product
