import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navabr = () => {
    return (
        <nav>
            <Link to='/shop'>Shop</Link>
            <Link to='/search'>Search</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Navabr;