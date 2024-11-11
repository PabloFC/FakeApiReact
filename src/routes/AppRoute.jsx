import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Electronics from "../pages/Electronics";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
