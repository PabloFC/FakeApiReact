import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../store/CartContext";

const Cart = () => {
  const { cart, total, removeFromCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1 style={{ color: "red" }}>Cart in progress</h1>
        <h2>Your cart is empty</h2>
        <p>There are no products selected.</p>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 style={{ color: "red" }}>Cart in progress</h1>

      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "50px", height: "50px" }}
          />
          <span>{item.title}</span>
          <span>Quantity: {item.quantity}</span>
          <span>€{(item.price * item.quantity).toFixed(2)}</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">
        <strong>Total: €{total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;
