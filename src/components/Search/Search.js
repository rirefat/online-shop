import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div>
            <h1>Search Your Product</h1>
            <div className="search-field">
                <input type="text" placeholder='Search Here' />
            </div>
        </div>
    );
};

export default Search;