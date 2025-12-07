import React from "react";
import { useParams, Navigate } from "react-router-dom";
import HeroCategories from "../components/HeroCategories";
import HeaderText from "../components/HeaderText";
import ProductsCard from "../components/ProductsCard";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

// Configuración de categorías
const categoryConfig = {
  electronics: {
    heroClass: "hero_electronics",
    title: "Electronics",
    category: "electronics",
  },
  men: {
    heroClass: "hero_men",
    title: "Men",
    category: "men's clothing",
  },
  women: {
    heroClass: "hero_women",
    title: "Women",
    category: "women's clothing",
  },
};

const Category = () => {
  const { categoryName } = useParams();
  const config = categoryConfig[categoryName];

  // Si la categoría no existe, redirigir a home
  if (!config) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="category-page">
      <HeroCategories
        className={config.heroClass}
        paragraph="find the best price!"
        title={config.title}
      />
      <section className="section-spacing">
        <HeaderText
          paragraph="Carefully created collections"
          title="Browse our Products"
        />
        <ProductsCard category={config.category} />
      </section>
      <Services />
      <Newsletter />
    </div>
  );
};

export default Category;
