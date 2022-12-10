import React from 'react';
import useProducts from '../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Home.css';

const Home = () => {
    const [products, setProducts]=useProducts();
    return (
        <div>
            <h1 className='title'>Our Available Products: {products.length}</h1>
            <div className="product-container">
                {
                    products.map(product=><SingleProduct
                        product={product}
                        key={product._id}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Home;