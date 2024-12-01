import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../store/CartContext";

const Navbar = () => {
  const { getCartCount } = useCartContext();

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
                <Link to="/#topProducts" className="nav-link">
                  Top Products
                </Link>
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
                  <Link
                    to="/jewelry"
                    className="dropdown-item border-0 transition-link"
                  >
                    Jewelry
                  </Link>
                  <Link
                    to="/men"
                    className="dropdown-item border-0 transition-link"
                  >
                    Men
                  </Link>
                  <Link
                    to="/women"
                    className="dropdown-item border-0 transition-link"
                  >
                    Women
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="logo">
              <Link to="/" className="navbar-brand">
                <span className="fw-bold text-uppercase text-dark">
                  FAKESTORE
                </span>
              </Link>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                  <small className="text-gray fw-normal">
                    ({getCartCount()})
                  </small>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
