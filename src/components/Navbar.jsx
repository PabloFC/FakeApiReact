import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../store/CartContext";

const Navbar = () => {
  const { getCartCount } = useCartContext();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll y agregar sombra al navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para verificar si un link está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`bg-white sticky-top transition-shadow ${
        scrolled ? "shadow" : ""
      }`}
      style={{ transition: "box-shadow 0.3s ease" }}
    >
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          {/* Logo responsive para móvil */}
          <div className="logo_responsive">
            <Link to="/" className="navbar-brand">
              <span className="fw-bold text-uppercase text-dark">
                FAKESTORE
              </span>
            </Link>
          </div>

          {/* Botón hamburguesa para móvil */}
          <button
            className="navbar-toggler"
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
            {/* Menú izquierdo */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  to="/#topProducts"
                  className={`nav-link fs-6 ${
                    isActive("/#topProducts") ? "active" : ""
                  }`}
                >
                  Top Products
                </Link>
              </li>

              {/* Dropdown de categorías */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center fs-6"
                  id="categoriesDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu mt-3 shadow-sm border-0"
                  aria-labelledby="categoriesDropdown"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <Link
                    to="/electronics"
                    className={`dropdown-item py-2 fs-6 ${
                      isActive("/electronics") ? "active text-gold" : ""
                    }`}
                  >
                    <i className="bi bi-laptop me-2"></i>
                    Electronics
                  </Link>
                  <div className="dropdown-divider my-1"></div>
                  <Link
                    to="/men"
                    className={`dropdown-item py-2 fs-6 ${
                      isActive("/men") ? "active text-gold" : ""
                    }`}
                  >
                    <i className="bi bi-person me-2"></i>
                    Men's Clothing
                  </Link>
                  <div className="dropdown-divider my-1"></div>
                  <Link
                    to="/women"
                    className={`dropdown-item py-2 fs-6 ${
                      isActive("/women") ? "active text-gold" : ""
                    }`}
                  >
                    <i className="bi bi-handbag me-2"></i>
                    Women's Clothing
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link fs-6" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Logo central para desktop */}
            <div className="logo mx-4">
              <Link to="/" className="navbar-brand">
                <span className="fw-bold text-uppercase text-dark fs-4">
                  FAKESTORE
                </span>
              </Link>
            </div>

            {/* Menú derecho */}
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link
                  to="/cart"
                  className={`nav-link d-flex align-items-center fs-6 ${
                    isActive("/cart") ? "active" : ""
                  }`}
                >
                  <i className="bi bi-cart3 me-2"></i>
                  <span>Cart</span>
                  {getCartCount() > 0 && (
                    <span
                      className="badge rounded-pill bg-danger ms-2"
                      style={{
                        fontSize: "0.7rem",
                      }}
                    >
                      {getCartCount()}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center fs-6"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-person-circle me-2"></i>
                  <span>Login</span>
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
