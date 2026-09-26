import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShield, FiLogIn, FiUserPlus, FiLayers, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 text-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="/main"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 border border-indigo-400/30">
              <FiShield className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
            </div>
            <div className="flex items-center text-lg tracking-tight">
              <span className="font-bold text-white">Auth</span>
              <span className="font-semibold text-indigo-400">Redux</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            {/* Auth links (show when logged out) */}
            <div className="flex items-center gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
                    isActive
                      ? "text-white bg-slate-800/90 border border-slate-700 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`
                }
              >
                <FiLogIn className="w-4 h-4" />
                <span>Login</span>
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-400/40 shadow-[0_0_16px_rgba(99,102,241,0.45)]"
                      : "bg-indigo-600/90 hover:bg-indigo-600 text-white border-indigo-500/40 shadow-sm shadow-indigo-950 hover:shadow-[0_0_16px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                  }`
                }
              >
                <FiUserPlus className="w-4 h-4" />
                <span>Register</span>
              </NavLink>
            </div>

            {/* App links (show when logged in - remove 'hidden' when hooked with auth state) */}
            <div className="hidden items-center gap-3">
              <NavLink
                to="/main"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
                    isActive
                      ? "text-white bg-slate-800/90 border border-slate-700 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`
                }
              >
                <FiLayers className="w-4 h-4" />
                <span>Dashboard</span>
              </NavLink>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-150 cursor-pointer"
              >
                <FiLogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
