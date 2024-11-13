import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import CartReducer, { InitialCartState } from "../store/CartReducer";
import Navbar from "../components/Navbar";
// import Electronics from "../pages/Electronics";
// import Jewelry from "../pages/Jewelry";
// import Men from "../pages/Men";
// import Women from "../pages/Women";

const AppRoute = () => {
  const [cart, dispatch] = useReducer(CartReducer, InitialCartState);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} dispatch={dispatch} />}
        />
        {/* <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
