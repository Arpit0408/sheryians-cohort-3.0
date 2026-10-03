import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiShield,
  FiLogIn,
  FiUserPlus,
  FiLayers,
  FiLogOut,
} from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  let { user } = useSelector((store) => store.auth);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const FirstLetter = user?.email?.charAt(0).toUpperCase();

  const handleLogout = () => {
    dispatch(removeUser());
    localStorage.removeItem("loggedUser");
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 text-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
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

          {/* Center Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <NavLink
              to="/main"
              end
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? "text-white bg-slate-800/90 border border-slate-700"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/main/shop"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? "text-white bg-slate-800/90 border border-slate-700"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/main/about"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? "text-white bg-slate-800/90 border border-slate-700"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`
              }
            >
              About
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {!user && (
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
                        ? "bg-indigo-600 text-white border-indigo-400/40"
                        : "bg-indigo-600/90 hover:bg-indigo-600 text-white border-indigo-500/40"
                    }`
                  }
                >
                  <FiUserPlus className="w-4 h-4" />
                  <span>Register</span>
                </NavLink>
              </div>
            )}

            {user && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 via-indigo-600 to-indigo-700 text-white font-semibold text-lg cursor-pointer flex items-center justify-center shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-[1.02]">
                  {FirstLetter}
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-150 cursor-pointer"
                >
                  <FiLogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
