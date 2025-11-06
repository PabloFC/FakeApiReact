import React from "react";

const HeroCategories = ({ paragraph, title, className }) => {
  return (
    <section className={`${className} hero-category-section position-relative`}>
      <div className="hero-category-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="hero-category-content position-relative z-1">
        <p className="text-uppercase text-center fw-bold text-gold mb-3 hero-category-subtitle">
          {paragraph}
        </p>
        <h1 className="display-3 fw-bold text-uppercase mb-0 text-white text-center hero-category-title">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroCategories;
