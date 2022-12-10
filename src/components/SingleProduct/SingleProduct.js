import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {name,price,img}=props.product;
    return (
        <div className='single-product'>
            <img src={img}></img>
            <h4>{name}</h4>
            <p>Product Price: ${price}</p>
        </div>
    );
};

export default SingleProduct;