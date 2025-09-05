import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Productdetails from './components/pages/ProductDetails';
import { Toaster } from "react-hot-toast";
import SearchProvider from "./components/context/SearchContext";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Analytics from "./admin/Analytics";
import AdminLogin from "./admin/AdminLogin";
import PrivateRoute from "./admin/PrivateRoute";
import TestFirestore from "./admin/TestFirestore";
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const location = useLocation();

  // ✅ hide header & footer on admin pages and login
  const hideHeaderFooter =
    location.pathname.startsWith("/admin") || location.pathname === "/admin-login";

  return (
    <div className="min-h-screen">
      <SearchProvider>
        {!hideHeaderFooter && <Header />}
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* Customer Routes */}
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/test-firestore" element={<TestFirestore />} />
        </Routes>

        <Toaster position="right-bottom" reverseOrder={false} />
        {!hideHeaderFooter && <Footer />}
      </SearchProvider>
      <WhatsAppButton />
    </div>
  );
}

export default App;
