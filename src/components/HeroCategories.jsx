import React from "react";

const HeroCategories = ({ paragraph, title, className }) => {
  return (
    <section className={`${className}`}>
      {/* <div className="container py-5"> */}
      {/* <div className="row px-4 px-lg-5"> */}
      <div>
        <p className="text-uppercase text-center" style={{ color: "#dcb14a" }}>
          {paragraph}
        </p>
        <h1 className="h2 text-uppercase mb-3 text-white text-center">
          {title}
        </h1>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default HeroCategories;
