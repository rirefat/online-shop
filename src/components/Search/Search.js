import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import img from '../../undraw_Web_search_re_efla.png';
import './Search.css';

const Search = () => {
    const [products, setProducts]=useProducts();
    const [searchText, setSearchText]=useState("");
    const [result, setResult]=useState([]);
    

    const handleSearch=(event)=>{
        let searchText = event.target.value.toLowerCase();
        setSearchText(searchText);
        let match = products.filter(value=>value.name.toLowerCase().includes(searchText));
        setResult(match);       
    }

    const clearField =()=>{
    }

    return (
        <div>
            <h1>Search Your Product</h1>
            <div className="search-field">
                <input onChange={handleSearch} type="text" placeholder='Search Product Name Here' id='search'/>
                {(searchText)?<button onClick={clearField}>X</button>:""}
            </div>
            <div className='notification'>
                <p>{result.length>=1 ? "Products Available For You:":" "}</p>
                <p>{result.length>=1 ? result.length :" "}</p>
            </div>

            {
                result.length>=1 ? <div className="product-container">                
                {
                    result.map(product=><SingleProduct
                        product={product}
                        key={product._id}
                    ></SingleProduct>)
                }
            </div>:
            <img className='placeholder-img' src={img}></img>
            }        
            
        </div>
    );
};

export default Search;