import React from 'react'
import { LuMail } from 'react-icons/lu'

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold flex items-center gap-3 text-slate-100">
        <LuMail className="text-indigo-400" />
        <span>Contact Page</span>
      </h1>
    </div>
  )
}
