/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from 'react-router-dom';
import '../styles/components/Header.css'

// eslint-disable-next-line arrow-body-style
const Header = ()=>{
    return (
        <header className="Header">
            <h1 className="Header-title">
                <Link to="/">PlatziConf Merch</Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket" title="checkout"/>
                </Link>
            </div>
        </header>
    )
}
export default Header;