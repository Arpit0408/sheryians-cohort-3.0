import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
