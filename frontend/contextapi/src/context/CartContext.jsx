import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [Cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ showCart, setShowCart, Cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
