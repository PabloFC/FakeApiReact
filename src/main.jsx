// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./store/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
  // </StrictMode>
);
