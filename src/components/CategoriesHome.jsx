import React from "react";
import electronics_categories from "../assets/photos/categories/electronics_categories.jpg";
import jewelry_categories from "../assets/photos/categories/jewelry_categories.jpg";
import women_categories from "../assets/photos/categories/women_categories.jpg";
import men_categories from "../assets/photos/categories/men_categories.jpg";
import CardCategoriesHome from "./CardCategoriesHome";

const CategoriesHome = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="card-group">
          {/* Electronics */}
          <CardCategoriesHome
            href="#"
            imgSrc={electronics_categories}
            altText="Electronics"
            title="Electronics"
          />
          {/* Jewelry */}
          <CardCategoriesHome
            href="#"
            imgSrc={jewelry_categories}
            altText="Jewelery"
            title="Jewelery"
          />
          {/* Men */}
          <CardCategoriesHome
            href="#"
            imgSrc={men_categories}
            altText="Men"
            title="Men"
          />
          {/* Women */}
          <CardCategoriesHome
            href="#"
            imgSrc={women_categories}
            altText="Women"
            title="Women"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;
