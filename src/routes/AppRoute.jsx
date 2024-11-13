import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import Home from "../pages/Home";
import Electronics from "../pages/Electronics";
import Jewelry from "../pages/Jewelry";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Navbar from "../components/Navbar";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
