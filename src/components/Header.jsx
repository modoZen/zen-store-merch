/* eslint-disable react/function-component-definition */
import React from "react";
import '../styles/components/Header.css'

// eslint-disable-next-line arrow-body-style
const Header = ()=>{
    return (
        <header className="Header">
            <h1 className="Header-title">PlatziConf Merch</h1>
            <div className="Header-checkout">
                Checkout
            </div>
        </header>
    )
}
export default Header;