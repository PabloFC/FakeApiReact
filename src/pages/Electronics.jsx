import React from "react";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";

const Electronics = () => {
  return (
    <>
      <HeroCategories
        className="hero_electronics"
        paragraph="find the best price!"
        title="Electronics"
      />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our Products"
      />
    </>
  );
};

export default Electronics;
