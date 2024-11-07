import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";
import TopProducts from "../components/TopProducts";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <HeroHome />
      </div>
      <CategoriesHome />
      <TopProducts />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
