import React from "react";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";
import TopProducts from "../components/TopProducts";
import Services from "../components/Services";
import HeaderText from "../components/HeaderText";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
