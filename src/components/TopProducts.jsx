import React from "react";
import { useState, useEffect } from "react";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=9"
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
      <div className="container">
        <header>
          <p className="small text-muted small text-uppercase text-center mb-1">
            Made the hard way
          </p>
          <h2 id="topProducts" className="h5 text-uppercase text-center mb-4">
            Top trending products
          </h2>
        </header>
      </div>
      <div className="top_products">
        {products.map((product) => (
          <div className="col-12 col-sm-3" key={product.id}>
            <div
              className="card text-black d-flex justify-content-center align-items-center mt-2 py-2 opacidad"
              style={{
                border: 0,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                minHeight: "300px",
              }}
            >
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img
                className="img-fluid"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  textAlign: "center",
                }}
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title py-3">
                    {truncateString(product.title, 24)}
                  </h5>
                  <p className="text-muted mb-4">{product.price} €</p>
                  <a className="btn-primario" href="#">
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