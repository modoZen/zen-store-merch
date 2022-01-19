/* eslint-disable react/function-component-definition */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/components/Layout.css'

// eslint-disable-next-line arrow-body-style
const Layout = ({ children })=>{
    return (
        <div className="Main">
            <Header />
            { children }
            <Footer />
        </div>
    )
}
export default Layout;