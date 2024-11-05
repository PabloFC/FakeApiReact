import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <HeroHome />
      </div>
      <CategoriesHome />
      <TopProducts />
    </>
  );
};

export default Home;
