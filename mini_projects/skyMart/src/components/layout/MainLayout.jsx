import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080b11] text-slate-100 font-sans relative">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
      {/* Slide-over Cart Drawer */}
      <CartDrawer />
    </div>
  );
}
