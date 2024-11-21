import React, { useEffect, useState } from "react";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);

  function truncateString(str, maxLength) {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  }

  return (
    <div id="electronics">
      {products.map((product) => (
        <div key={product.id} className="container py-2 mt-2">
          <div className="row justify-content-center mb-3">
            <div className="col-12">
              <div
                className="card rounded-3 border_cards"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.09)" }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="img-fluid img_products"
                        />
                        <a href="#">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5 style={{ textAlign: "left" }}>{product.title}</h5>
                      <p className="mb-4 mb-md-0" style={{ textAlign: "left" }}>
                        {truncateString(product.description, 150)}
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3">
                      <div className="d-flex justify-content-center align-items-center mb-1">
                        <h4 className="mb-1 me-1">{product.price}€</h4>
                      </div>
                      <div className="d-flex flex-column mt-2">
                        <button className="btn-primario" type="button">
                          Add to cart
                        </button>
                        {/* <button className="btn btn-light" type="button">
                          Add to wish list
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
