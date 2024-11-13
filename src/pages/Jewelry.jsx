import React from "react";
import HeroCategories from "../components/HeroCategories";
// import Navbar from "../components/Navbar";
import HeaderText from "../components/HeaderText";

const Jewelry = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCategories
        className="hero_jewelry"
        paragraph=" find the best price!"
        title="Jewelry"
      />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our Products"
      />
    </>
  );
};

export default Jewelry;
