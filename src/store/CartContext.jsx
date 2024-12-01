import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
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

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.filter(
        (cartItem) => cartItem.id !== productId
      );
      const removedItem = currentCart.find(
        (cartItem) => cartItem.id === productId
      );
      if (removedItem) {
        setTotal(
          (prevTotal) => prevTotal - removedItem.price * removedItem.quantity
        );
      }
      return updatedCart;
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, getCartCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
