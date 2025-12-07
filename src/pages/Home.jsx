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
    <div className="home-page">
      <HeroHome />
      <section className="section-spacing">
        <HeaderText
          paragraph="Carefully created collections"
          title="Browse our categories"
        />
        <CategoriesHome />
      </section>
      <section className="section-spacing" id="topProducts">
        <HeaderText paragraph="Featured Collection" title="Premium Products" />
        <TopProducts />
      </section>
      <Services />
      <Newsletter />
    </div>
  );
};

export default Home;
