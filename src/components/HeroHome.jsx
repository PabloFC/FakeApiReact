import React from "react";

const HeroHome = () => {
  return (
    <section className="hero pb-3 bg-cover bg-center d-flex align-items-center img-fluid">
      <div className="container py-5">
        <div className="row px-4 px-lg-5">
          <div className="col-lg-6">
            <p className="text-muted small text-uppercase mb-2">
              New Inspiration 2024
            </p>
            <h1 className="h2 text-uppercase mb-3">
              15% off on new Electronics season
            </h1>
            <a className="btn btn-dark" href="#">
              Browse collections
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
