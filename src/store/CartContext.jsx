import { createContext, useReducer } from "react";
import CartReducer, { InitialCartState } from "./CartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, InitialCartState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
