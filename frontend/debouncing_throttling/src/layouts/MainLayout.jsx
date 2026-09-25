import React from "react";
import { Outlet, Link } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div className="w-full flex justify-center py-2 px-4 bg-slate-700 ">
        <div className=" flex gap-4 items-center ">
          <nav className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;  
