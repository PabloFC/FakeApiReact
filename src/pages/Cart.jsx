import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useCartContext } from "../store/CartContext";

const Cart = () => {
  const { cart, total, removeFromCart } = useCartContext();

  const buyMessage = () => {
    Swal.fire({
      icon: "success",
      title: "Your order has been placed successfully.",
      showConfirmButton: true,
      confirmButtonColor: "#dcb14a",
      timer: 3000,
    });
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container  d-flex flex-column align-items-center container py-5 h-100">
        <h1>Your cart is empty</h1>
        <h6 className="py-3">There are no products selected.</h6>
        <Link to="/#topProducts" className="secondary_btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2 ">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">
                            {cart.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="row mb-4 d-flex justify-content-between align-items-center"
                          >
                            <div className="d-md-none col-md-1 col-lg-1 col-xl-1 text-end">
                              <a
                                href="#"
                                className="text-muted"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M18 6l-12 12" />
                                  <path d="M6 6l12 12" />
                                </svg>
                              </a>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={item.image}
                                className="img-fluid rounded-3 imgMobile"
                                alt={item.title}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 mt-3 mt-md-0">
                              <h6 className="text-muted">
                                {item.category.charAt(0).toUpperCase() +
                                  item.category.slice(1)}
                              </h6>
                              <h6 className="mb-4">{item.title}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2">
                              {/* <button
                                className="btn btn-link px-2 "
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              ></button> */}
                              <input
                                type="number"
                                className="form-control form-control-sm mb-4"
                                value={item.quantity}
                                readOnly
                              />
                              {/* <button
                                className="btn btn-link px-2"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              ></button> */}
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">
                                {(item.price * item.quantity).toFixed(2)} €
                              </h6>
                            </div>
                            <div className="d-none d-md-block col-md-1 col-lg-1 col-xl-1 text-end">
                              <a
                                href="#"
                                className="text-muted"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M18 6l-12 12" />
                                  <path d="M6 6l12 12" />
                                </svg>
                              </a>
                            </div>
                            <hr className="my-4"></hr>
                          </div>
                        ))}
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 12l14 0" />
                                <path d="M5 12l4 4" />
                                <path d="M5 12l4 -4" />
                              </svg>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-body-tertiary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            {cart.length} items
                          </h5>
                          <h5>€ {total.toFixed(2)}</h5>
                        </div>
                        <h5 className="text-uppercase mb-3">Shipping</h5>
                        <div className="mb-4 pb-2">
                          <select data-mdb-select-init="">
                            <option value={1}>Standard-Delivery- €5.00</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                          </select>
                        </div>

                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ {(total + 5).toFixed(2)}</h5>
                        </div>
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-dark btn-lg btn-block "
                          data-mdb-ripple-color="dark"
                          onClick={buyMessage}
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
