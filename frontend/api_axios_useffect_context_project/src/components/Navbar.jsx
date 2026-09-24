import React, { useContext } from "react";
import MyContext from "../context/MyContext";
const Navbar = () => {
  const { setToggle } = useContext(MyContext);
  return (
    <nav className="w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 text-white px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          ApiData
        </span>
      </div>

      {/* Middle: Nav Links */}
      <div className="flex items-center gap-8 text-sm font-medium text-zinc-300">
        <span
          className="cursor-pointer hover:text-white transition-colors duration-200"
          onClick={() => setToggle(true)}
        >
          Products
        </span>
        <span
          className="cursor-pointer hover:text-white transition-colors duration-200"
          onClick={() => setToggle(false)}
        >
          Cart
        </span>
      </div>

      {/* Right: Login Button */}
      <div>
        <button
          type="button"
          className="px-4 py-1.5 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-lg hover:bg-white transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
