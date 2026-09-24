import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/routes";
import { getProducts } from "./api/products";
import { useContext } from "react";
import EcomContext from "./context/EcomContext";

const App = () => {
  const { ProductsData, setProductsData } = useContext(EcomContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setProductsData(res.data);
    };
    fetchData();
  }, []);
  console.log("Products data", ProductsData);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
