import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <div className="logo_responsive">
            <a className="navbar-brand" href="index.html">
              <span className="fw-bold text-uppercase text-dark">
                FAKESTORE
              </span>
            </a>
          </div>
          <button
            className="navbar-toggler navbar-toggler-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#topProducts">
                  Top Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="pagesDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu mt-3 shadow-sm"
                  aria-labelledby="pagesDropdown"
                >
                  <Link
                    to="/electronics"
                    className="dropdown-item border-0 transition-link"
                  >
                    Electronics
                  </Link>
                  <a
                    className="dropdown-item border-0 transition-link"
                    href="./jewelery/index.html"
                  >
                    Jewelry
                  </a>
                  <a
                    className="dropdown-item border-0 transition-link"
                    href="./mens/index.html"
                  >
                    Men
                  </a>
                  <a
                    className="dropdown-item border-0 transition-link"
                    href="./womens/index.html"
                  >
                    Women
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="logo">
              <a className="navbar-brand" href="index.html">
                <span className="fw-bold text-uppercase text-dark">
                  FAKESTORE
                </span>
              </a>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="cart.html">
                  <i className="fas fa-dolly-flatbed me-1 text-gray" />
                  Cart<small className="text-gray fw-normal">(2)</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <i className="fas fa-user me-1 text-gray fw-normal" />
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
