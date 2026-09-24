import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
function App() {
  const { showCart } = useContext(CartContext);
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      {showCart ? <Cart /> : <Products />}
    </div>
  );
}

export default App;
