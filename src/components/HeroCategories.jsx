import React from "react";

const HeroCategories = ({ paragraph, title, className }) => {
  return (
    <section className={`${className} hero-category-section`}>
      <div className="hero-category-content">
        <p className="text-uppercase text-center fw-bold text-gold mb-2">
          {paragraph}
        </p>
        <h1 className="display-5 fw-bold text-uppercase mb-0 text-white text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroCategories;
