import React from "react";
import { Link } from "react-router-dom";

const CardCategoriesHome = ({ to, imgSrc, altText, title }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <Link to={to} className="text-decoration-none">
        <div className="card category-card h-100 shadow-sm">
          <div className="position-relative overflow-hidden" style={{ height: "280px" }}>
            <img 
              src={imgSrc} 
              className="card-img-top w-100 h-100" 
              style={{ objectFit: "cover" }}
              alt={altText}
              loading="lazy"
            />
            <div className="category-overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <strong className="categories_title position-absolute top-50 start-50 translate-middle">{title}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCategoriesHome;
