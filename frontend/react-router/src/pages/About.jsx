import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { LuInfo, LuArrowLeft, LuArrowRight } from 'react-icons/lu'

export default function About() {
  // 1. useNavigate hook initialize kiya
  const navigate = useNavigate()

  const subLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
      isActive
        ? 'bg-indigo-600 border-indigo-500 text-white'
        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
    }`

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold flex items-center gap-3 text-slate-100">
        <LuInfo className="text-indigo-400" />
        <span>About Page</span>
      </h1>

      {/* 2. useNavigate Demo Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)} // Ek page peeche jane ke liye
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-750 text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          <LuArrowLeft /> Go Back (navigate(-1))
        </button>
        <button
          onClick={() => navigate('/contact')} // Contact page par direct bhejne ke liye
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold transition-colors"
        >
          Go to Contact (navigate('/contact')) <LuArrowRight />
        </button>
      </div>

      {/* 3. Nested Routes ke Links */}
      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-semibold">
          Nested Routes Navigation:
        </p>
        <div className="flex gap-3">
          <NavLink to="team" className={subLinkClass}>
            Team
          </NavLink>
          <NavLink to="company" className={subLinkClass}>
            Company
          </NavLink>
        </div>
      </div>

      {/* 4. <Outlet />: Yahan par nested child component render hoga */}
      <Outlet />
    </div>
  )
}
