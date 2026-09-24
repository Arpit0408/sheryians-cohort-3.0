import React from "react";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { setShowCart, Cart } = useContext(CartContext);
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-900 text-white border-b border-zinc-800">
      {/* Left: Logo */}
      <div
        onClick={() => setShowCart(false)}
        className="text-2xl font-bold tracking-wide text-emerald-400 cursor-pointer"
      >
        Context
      </div>

      {/* Center: Links */}
      <div className="flex items-center gap-8 text-base font-medium">
        <a
          onClick={() => setShowCart(false)}
          className="text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Home
        </a>
        <a
          onClick={() => setShowCart(true)}
          className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <div className="relative flex items-center">
            <FiShoppingCart className="text-lg" />
            {Cart && Cart.length > 0 && (
              <span className="absolute -top-2.5 -right-2.5 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-tight shadow-md">
                {Cart.length}
              </span>
            )}
          </div>
          <span>Cart</span>
        </a>
      </div>

      {/* Right: Login Button */}
      <div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          <FiLogIn className="text-base" />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
