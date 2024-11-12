import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";
import TopProducts from "../components/TopProducts";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our categories"
      />
      <CategoriesHome />
      <HeaderText
        paragraph="Top rated products"
        title="Check out our top products"
      />
      <TopProducts />
      <Services />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
