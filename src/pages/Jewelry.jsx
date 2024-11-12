import React from "react";
import HeroCategories from "../components/HeroCategories";
import Navbar from "../components/Navbar";

const Jewelry = () => {
  return (
    <>
      <Navbar />
      <HeroCategories
        className="hero_jewelry"
        paragraph=" find the best price!"
        title="Jewelry"
      />
    </>
  );
};

export default Jewelry;
