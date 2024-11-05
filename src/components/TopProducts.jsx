import React from "react";

const TopProducts = () => {
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
      <div className="top_products" />
    </main>
  );
};

export default TopProducts;
