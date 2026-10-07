import React from "react";
import { NavLink } from "react-router";
import { ShoppingBag, ShoppingCart, Package, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../features/auth/state/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
  };

  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-slate-800 text-indigo-400 shadow-inner border border-slate-700/60"
        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
    }`;

  const iconLinkClass = ({ isActive }) =>
    `relative p-2 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30"
        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink to="/main" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            NexStore
          </span>
        </NavLink>

        {/* Center Navigation Links */}
        <nav className="flex items-center gap-1.5 bg-slate-900/60 p-1 rounded-xl border border-slate-800/70">
          <NavLink to="/main" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/main/product" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/main/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>

        {/* Right Action Icons & Logout */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <NavLink to="/main/cart" className={iconLinkClass} title="Cart">
            <ShoppingCart className="w-5 h-5" />
          </NavLink>

          {/* Orders Icon */}
          <NavLink to="/main/orders" className={iconLinkClass} title="Orders">
            <Package className="w-5 h-5" />
          </NavLink>

          {/* Subtle Divider */}
          <div className="h-5 w-[1px] bg-slate-800" />

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-rose-400/90 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/30 transition-all duration-200 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
