import { createContext, createContext, useReducer } from "react";
import CartReducer, { InitialCartState } from "./CartReducer";

const createContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, InitialCartState);
  return (
    <createContext.Provider value={{ cart, dispatch }}>
      {children}
    </createContext.Provider>
  );
};

export { CartProvider, createContext };
