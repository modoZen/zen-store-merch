/* eslint-disable react/function-component-definition */
import React from "react";
import initialState from "../initialState";
import Products from "../components/Products";

// eslint-disable-next-line arrow-body-style
const Home = ()=>{
    return (
        <Products products={initialState.products}  />
    )
}
export default Home;