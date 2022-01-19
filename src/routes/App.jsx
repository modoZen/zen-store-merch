/* eslint-disable react/function-component-definition */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Checkout, Information, Payment, Success, NotFound} from '../containers'
import Layout from "../components/Layout";
// eslint-disable-next-line arrow-body-style
const App = ()=>{
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/"                     element={<Home />} />
                    <Route path="/checkout"             element={<Checkout />} />
                    <Route path="/checkout/information" element={<Information />} />
                    <Route path="/checkout/payment"     element={<Payment />} />
                    <Route path="/checkout/success"     element={<Success />} />
                    <Route path="*"                     element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )}

export default App;