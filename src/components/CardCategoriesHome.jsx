import React from "react";

const CardCategoriesHome = ({ href, imgSrc, altText, title }) => {
  return (
    <a href={href} className="col-12 col-sm-3">
      <div className="card mb-1">
        <img
          src={imgSrc}
          className="card-img-top"
          alt={altText}
          style={{ width: "120% !important" }}
        />
        <strong className="categories_title">{title}</strong>
      </div>
    </a>
  );
};

export default CardCategoriesHome;
