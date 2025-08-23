import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout'
import Productdetails from './components/pages/ProductDetails'
import { Toaster } from "react-hot-toast";
import SearchProvider from "./components/context/SearchContext";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  
    return(
        <div className="min-h-screen">
              <SearchProvider>
            <Header/>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/product/:id" element={<Productdetails/>} />
                <Route path='./components/pages/Cart.jsx' element={<Cart/>} />
                <Route path='./components/pages/Checkout.jsx' element={<Checkout/>} />
            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
              </SearchProvider>
            <Footer/>
        </div>
    )
  
}

export default App
