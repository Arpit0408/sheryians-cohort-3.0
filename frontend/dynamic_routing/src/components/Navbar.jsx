import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-900 border-b border-zinc-800 shadow-lg">
      {/* Left: Logo */}
      <div className="text-2xl font-bold tracking-wider text-emerald-400">
        <Link to="/">ECOM</Link>
      </div>

      {/* Middle: Links */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-zinc-400 hover:text-zinc-100'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-zinc-400 hover:text-zinc-100'
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-zinc-400 hover:text-zinc-100'
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right: Login */}
      <div>
        <Link
          to="/login"
          className="px-5 py-2 text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/10 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
