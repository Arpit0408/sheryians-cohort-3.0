import { createContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  // states
  const [Cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  // quantity increment fn
  const IncrementQunatity = (id) => {
    setCart((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  // quantity decrement fn
  const DecrementQunatity = (id) => {
    setCart((prev) => {
      return prev
        .map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  // remove fn
  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };

  return (
    <MyContext.Provider
      value={{
        Cart,
        setCart,
        toggle,
        setToggle,
        IncrementQunatity,
        DecrementQunatity,
        removeFromCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
