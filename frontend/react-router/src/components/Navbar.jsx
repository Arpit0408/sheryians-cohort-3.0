import React from 'react'
import { NavLink } from 'react-router-dom'
import { LuHouse, LuInfo, LuMail } from 'react-icons/lu'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-slate-300 hover:text-white hover:bg-slate-800'
    }`

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 border-b border-slate-800">
      <h2 className="text-xl font-bold text-white tracking-wide">React Router</h2>
      <div className="flex items-center gap-4">
        <NavLink to="/" end className={linkClass}>
          <LuHouse className="w-5 h-5" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          <LuInfo className="w-5 h-5" />
          <span>About</span>
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <LuMail className="w-5 h-5" />
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  )
}
