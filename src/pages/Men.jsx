import React from "react";
// import Navbar from "../components/Navbar";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";
const Men = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCategories
        className="hero_men"
        paragraph=" find the best price!"
        title="Men"
      />
      <HeaderText
        paragraph="Carefully created collections"
        title="Browse our Products"
      />
    </>
  );
};

export default Men;
