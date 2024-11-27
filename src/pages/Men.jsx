import React from "react";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";
import ProductsCard from "../components/ProductsCard";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
const Men = () => {
  return (
    <>
      <HeroCategories
        className="hero_men"
        paragraph="find the best price!"
        title="Men"
      />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our Products"
      />
      <ProductsCard category="men's clothing" />
      <Services />
      <Newsletter />
    </>
  );
};

export default Men;
