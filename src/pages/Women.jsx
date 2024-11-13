import React from "react";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";

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
    </>
  );
};

export default Women;
