import React from "react";
import Navbar from "../components/Navbar";
import HeroCategories from "../components/HeroCategories";

const Women = () => {
  return (
    <>
      <Navbar />
      <HeroCategories
        className="hero_women"
        paragraph=" find the best price!"
        title="Women"
      />
    </>
  );
};

export default Women;
