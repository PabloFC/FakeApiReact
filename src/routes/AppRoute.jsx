import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";
import Footer from "../components/Footer";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Category />} />
        <Route path="/jewelry" element={<Category />} />
        <Route path="/men" element={<Category />} />
        <Route path="/women" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoute;
