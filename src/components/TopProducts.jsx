import React from "react";
import { useState, useEffect } from "react";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8"
        );
        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchProducts();
  }, []);

  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return (
    <main className="py-5">
      <div className=" container top_products">
        {products.map((product) => (
          <div className="col-12 col-sm-3" key={product.id}>
            <div
              className="card text-black d-flex justify-content-center align-items-center mt-2 py-2"
              style={{
                border: 0,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                minHeight: "300px",
              }}
            >
              <img
                className="img-fluid"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title py-3">
                    {truncateString(product.title, 18)}
                  </h5>
                  <p className="text-muted mb-4">{product.price} €</p>

                  <a className="primary_btn" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TopProducts;
