import React from "react";
import Navbar from "../components/Navbar";
import HeroCategories from "../components/HeroCategories";

const Men = () => {
  return (
    <>
      <Navbar />
      <HeroCategories
        className="hero_men"
        paragraph=" find the best price!"
        title="Men"
      />
    </>
  );
};

export default Men;
