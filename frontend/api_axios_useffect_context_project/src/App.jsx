import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/Cart";
import MyContext from "./context/MyContext";

function App() {
  // states
  const [ProductData, setProductData] = useState([]);

  // context
  const { toggle, Cart } = useContext(MyContext);

  // api
  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
  };
  // useeffect api fn call
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      {toggle ? (
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ProductData.map((product) => {
              let isInCart = Cart.find((x) => x.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  isInCart={isInCart}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <CartPage />
      )}
    </div>
  );
}

export default App;
