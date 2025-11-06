import React from "react";
import { useLocation } from "react-router-dom";
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
  jewelry: {
    heroClass: "hero_jewelry",
    title: "Jewelry",
    category: "jewelery",
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
  const location = useLocation();
  // Extraer el nombre de la categoría de la URL (ej: /electronics -> electronics)
  const categoryName = location.pathname.slice(1); // Remover el "/"
  const config = categoryConfig[categoryName];

  // Si la categoría no existe, mostrar error
  if (!config) {
    return (
      <div className="container py-5 text-center">
        <h1>Category not found</h1>
        <p>The category you're looking for doesn't exist.</p>
      </div>
    );
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

