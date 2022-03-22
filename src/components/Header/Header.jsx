import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <img src={logo} alt="" />
                <div className='header'>
                    <a href="http:/order">Order</a>
                    <a href="http:/review">Order Review</a>
                    <a href="http:/inventory">Manage Inventory</a>
                    <a href="http:/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;