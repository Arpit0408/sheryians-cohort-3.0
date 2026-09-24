import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <header className="w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/80 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700/80 overflow-hidden flex items-center justify-center shadow-inner">
          <img
            className="w-full h-full object-cover"
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
            alt="Users Icon"
          />
        </div>
        <span className="font-semibold text-zinc-100 text-base tracking-tight hidden sm:inline-block">
          UserHub
        </span>
      </div>

      <nav className="flex items-center gap-8 font-medium text-sm text-zinc-400">
        <span className="hover:text-white transition-colors duration-200 cursor-pointer">
          Home
        </span>
        <span className="hover:text-white transition-colors duration-200 cursor-pointer">
          About
        </span>
        <span className="hover:text-white transition-colors duration-200 cursor-pointer">
          Contact
        </span>
      </nav>

      <button
        onClick={() => setToggle((prev) => !prev)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/25 cursor-pointer flex items-center gap-2"
      >
        <span>Create user</span>
      </button>
    </header>
  );
};

export default Navbar;
