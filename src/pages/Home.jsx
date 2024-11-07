import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";
import TopProducts from "../components/TopProducts";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <HeaderText
        paragraph="Carefully created collections"
        mainTitle="Browse our categories"
      />
      <CategoriesHome />
      <HeaderText
        paragraph="Top rated products"
        mainTitle="Check out our top products"
      />
      <TopProducts />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
