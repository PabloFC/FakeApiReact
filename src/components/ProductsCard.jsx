import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { useCartContext } from "../store/CartContext";
const ProductsCard = ({ category }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mapeo de categorías con múltiples subcategorías válidas de DummyJSON
        const categoryMap = {
          electronics: ["laptops", "smartphones", "tablets"],
          "men's clothing": [
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "fragrances",
          ],
          "women's clothing": [
            "womens-dresses",
            "womens-shoes",
            "womens-bags",
            "womens-jewellery",
          ],
        };

        const categories = categoryMap[category] || ["smartphones"];

        // Fetch múltiples categorías en paralelo con manejo de errores
        const promises = categories.map((cat) =>
          fetch(`https://dummyjson.com/products/category/${cat}`)
            .then((res) => {
              if (!res.ok) throw new Error(`Category ${cat} not found`);
              return res.json();
            })
            .catch((error) => {
              console.warn(`Error fetching ${cat}:`, error);
              return { products: [] };
            })
        );

        const results = await Promise.all(promises);

        // Tomar productos variados (3-4 de cada categoría)
        const variedProducts = [];
        const productsPerCategory = Math.ceil(12 / categories.length);

        results.forEach((data) => {
          if (data.products.length > 0) {
            variedProducts.push(...data.products.slice(0, productsPerCategory));
          }
        });

        setProducts(variedProducts);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, [category]);

  function truncateString(str, maxLength) {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  }

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
    <div className="container">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                  {product.title}
                </h5>
                <p className="fs-4 fw-bold text-gold mb-3">{product.price} €</p>
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
  );
};

export default ProductsCard;
