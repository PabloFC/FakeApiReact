import React from "react";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="hero pb-3 bg-cover bg-center d-flex align-items-center img-fluid">
      <div className="container py-5">
        <div className="row px-4 px-lg-5">
          <div className="col-lg-6">
            <p className="text-muted small text-uppercase mb-2 hero_paragraph">
              New Inspiration 2024
            </p>
            <h1 className="h2 text-uppercase mb-3 hero_h1">
              15% off on new Electronics season
            </h1>
            <Link to="/electronics" className="btn btn-dark">
              Browse collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
