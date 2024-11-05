import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <HeroHome />
      </div>
      <CategoriesHome />
    </>
  );
};

export default Home;
