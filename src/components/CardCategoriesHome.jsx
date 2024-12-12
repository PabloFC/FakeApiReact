import React from "react";
import { Link } from "react-router-dom";

const CardCategoriesHome = ({ to, imgSrc, altText, title }) => {
  return (
    <Link to={to} className="col-12 col-sm-3">
      <div className="card mb-1">
        <img src={imgSrc} className="card-img-top" alt={altText} />
        <strong className="categories_title">{title}</strong>
      </div>
    </Link>
  );
};

export default CardCategoriesHome;
