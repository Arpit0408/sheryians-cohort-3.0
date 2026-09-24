import { createContext, useState } from "react";

const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [ProductsData, setProductsData] = useState([]);

  return (
    <EcomContext.Provider value={{ ProductsData, setProductsData }}>
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;
