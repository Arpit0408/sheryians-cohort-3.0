import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiLogOut,
  FiBell,
} from "react-icons/fi";
import { Auth } from "../context/AuthContext";

const MainLayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(Auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedinUser");
    if (setIsLoggedIn) {
      setIsLoggedIn(null);
    }
    navigate("/");
  };

  // Aapke child routes ke according navigation items
  const navItems = [
    { name: "Home", path: "/main", icon: <FiHome className="text-lg" /> },
    {
      name: "Users",
      path: "/main/users",
      icon: <FiUsers className="text-lg" />,
    },
    {
      name: "Products",
      path: "/main/products",
      icon: <FiShoppingBag className="text-lg" />,
    },
  ];

  return (
    <div className="flex h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden font-sans">
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-neutral-900/95 border-r border-neutral-800 flex flex-col justify-between shrink-0 select-none">
        <div>
          {/* Brand Logo */}
          <div className="h-16 flex items-center px-6 border-b border-neutral-800/80 gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
              S
            </div>
            <span className="font-bold text-lg text-white tracking-wide">
              Sheryians
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-1.5">
            <p className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
              Main Menu
            </p>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/main"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* User Info & Logout Button */}
        <div className="p-4 border-t border-neutral-800/80 bg-neutral-900/40">
          <div className="flex items-center gap-3 px-2 py-2 mb-2 rounded-xl">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-inner">
              {isLoggedIn?.name ? isLoggedIn.name[0].toUpperCase() : "U"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white truncate">
                {isLoggedIn?.name || "Logged In User"}
              </p>
              <p className="text-xs text-neutral-400 truncate">
                {isLoggedIn?.email || "user@example.com"}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer border border-rose-500/10"
          >
            <FiLogOut className="text-base" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-neutral-950">
        {/* Top Navbar Header */}
        <header className="h-16 border-b border-neutral-800 bg-neutral-900/40 backdrop-blur-md px-6 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-base font-semibold text-white">Application</h2>
            <p className="text-xs text-neutral-400">
              Welcome back, {isLoggedIn?.name || "User"}!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/70 transition-colors relative">
              <FiBell className="text-lg" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 absolute top-2 right-2"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Outlet jisme Home, Users aur Products render honge */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
