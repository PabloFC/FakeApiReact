import React from "react";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";
import ProductsCard from "../components/ProductsCard";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
const Women = () => {
  return (
    <>
      <HeroCategories
        className="hero_women"
        paragraph=" find the best price!"
        title="Women"
      />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our Products"
      />
      <ProductsCard category="women's clothing" />
      <Services />
      <Newsletter />
    </>
  );
};

export default Women;
