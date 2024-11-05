import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <HeroHome />
      </div>
    </>
  );
};

export default Home;
