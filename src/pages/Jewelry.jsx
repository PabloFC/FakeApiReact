import React from "react";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";
import ProductsCard from "../components/ProductsCard";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

const Jewelry = () => {
  return (
    <>
      <HeroCategories
        className="hero_jewelry"
        paragraph="find the best price!"
        title="Jewelry"
      />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our Products"
      />
      <ProductsCard category="jewelery" />
      <Services />
      <Newsletter />
    </>
  );
};

export default Jewelry;
