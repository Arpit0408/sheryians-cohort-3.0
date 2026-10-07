import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar.jsx";
import Footer from "../../shared/ui/components/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
