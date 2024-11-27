import React, { useEffect } from "react";
import HeroHome from "../components/HeroHome";
import CategoriesHome from "../components/CategoriesHome";
import TopProducts from "../components/TopProducts";
import Services from "../components/Services";
import HeaderText from "../components/HeaderText";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
        id="topProducts"
      />
      <TopProducts />
      <Services />
      <Newsletter />
    </>
  );
};

export default Home;
