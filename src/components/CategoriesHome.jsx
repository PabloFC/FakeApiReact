import React from "react";
import electronics_categories from "../assets/photos/categories/electronics_categories.jpg";
import jewelry_categories from "../assets/photos/categories/jewelry_categories.jpg";
import women_categories from "../assets/photos/categories/women_categories.jpg";
import men_categories from "../assets/photos/categories/men_categories.jpg";
import CardCategoriesHome from "./CardCategoriesHome";

const CategoriesHome = () => {
  return (
    <section className="pt-5">
      <div className="text-center">
        <p className="small text-muted small text-uppercase mb-1">
          Carefully created collections
        </p>
        <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        <div className="container">
          <div className="card-group">
            {/* Electronics */}
            <CardCategoriesHome
              href="./electronics/index.html"
              imgSrc={electronics_categories}
              altText="Electronics"
              title="Electronics"
            />
            {/* Jewelry */}
            <CardCategoriesHome
              href="./jewelery/index.html"
              imgSrc={jewelry_categories}
              altText="Jewelery"
              title="Jewelery"
            />
            {/* Men */}
            <CardCategoriesHome
              href="./mens/index.html"
              imgSrc={men_categories}
              altText="Men"
              title="Men"
            />
            {/* Women */}
            <CardCategoriesHome
              href="./womens/index.html"
              imgSrc={women_categories}
              altText="Women"
              title="Women"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;
