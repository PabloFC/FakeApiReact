import React from "react";

const HeaderText = ({ paragraph, title }) => {
  return (
    <section className="text-center mb-5 mt-5">
      <p className="small text-muted small text-uppercase mb-1">{paragraph}</p>
      <h2 className="h5 text-uppercase mb-4">{title}</h2>
    </section>
  );
};

export default HeaderText;
