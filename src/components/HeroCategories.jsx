import React from "react";

const HeroCategories = ({ paragraph, title, className }) => {
  return (
    <section className={`${className}`}>
      <div>
        <p className="text-uppercase text-center fw-bold text-gold">
          {paragraph}
        </p>
        <h1 className="h2 text-uppercase mb-3 text-white text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroCategories;
