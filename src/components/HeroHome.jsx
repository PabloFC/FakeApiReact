import React from "react";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="hero hero-home-section bg-cover bg-center d-flex align-items-center">
      <div className="container py-5">
        <div className="row px-4 px-lg-5">
          <div className="col-lg-6 hero-content">
            <p className="text-muted small text-uppercase mb-3 hero_paragraph">
              New Inspiration 2024
            </p>
            <h1 className="display-5 fw-bold text-uppercase mb-4 hero_h1">
              15% off on new Electronics season
            </h1>
            <Link to="/electronics" className="btn btn-dark btn-lg hero-btn">
              Browse collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
