import React from "react";

const HeaderText = ({ paragraph, title, id }) => {
  return (
    <div id={id} className="text-center mb-5">
      <p className="small text-muted text-uppercase mb-2">{paragraph}</p>
      <h2 className="h4 fw-bold text-uppercase mb-0">{title}</h2>
    </div>
  );
};

export default HeaderText;
