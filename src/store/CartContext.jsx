import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (newProduct) => {
    setCart((currentCart) => {
      const existingCartItem = currentCart.find(
        (cartItem) => cartItem.id === newProduct.id
      );
      if (existingCartItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === newProduct.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...currentCart, { ...newProduct, quantity: 1 }];
    });
    setTotal((currentTotal) => currentTotal + newProduct.price);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
