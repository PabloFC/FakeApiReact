import React from "react";
import Swal from "sweetalert2";
import "animate.css";
import { useState, useEffect } from "react";
import { useCartContext } from "../store/CartContext";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=30&sortBy=price&order=desc"
        );
        const data = await response.json();

        // Filtrar para obtener productos más variados de diferentes categorías
        const seenCategories = new Set();
        const variedProducts = data.products.filter((product) => {
          if (
            seenCategories.size < 8 &&
            !seenCategories.has(product.category)
          ) {
            seenCategories.add(product.category);
            return true;
          }
          return false;
        });

        // Si no hay suficientes productos únicos, rellenar con los más caros
        if (variedProducts.length < 8) {
          const remaining = data.products
            .filter((p) => !variedProducts.includes(p))
            .slice(0, 8 - variedProducts.length);
          variedProducts.push(...remaining);
        }

        setProducts(variedProducts.slice(0, 8));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchProducts();
  }, []);

  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      imageUrl: product.thumbnail,
      imageHeight: 120,
      imageWidth: 120,
      title: "Product added to cart!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#dcb14a",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };
  return (
    <main className="py-5">
      <div className="container">
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card product-card h-100 shadow-sm">
                <div
                  className="bg-light d-flex align-items-center justify-content-center p-4"
                  style={{ height: "220px" }}
                >
                  <img
                    className="img-fluid product-image"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title fw-semibold mb-2"
                    style={{
                      minHeight: "2.8rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {truncateString(product.title, 18)}
                  </h5>
                  <p className="fs-4 fw-bold text-gold mb-3">
                    {product.price} €
                  </p>
                  <button
                    className="btn btn-dark product-btn mt-auto"
                    type="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TopProducts;
