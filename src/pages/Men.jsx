import React from "react";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";
import ProductsCard from "../components/ProductsCard";
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
      <ProductsCard />
    </>
  );
};

export default Men;
