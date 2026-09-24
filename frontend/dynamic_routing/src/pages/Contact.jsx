import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Contact Us</h1>
        <p className="mt-3 text-zinc-400 text-lg">
          Have questions or need assistance? Reach out to our support team directly.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-zinc-800 text-emerald-400 rounded-xl text-xl">
            <FiMail />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Email Us</h3>
            <p className="text-sm text-zinc-400 mt-1">Our support team replies within 24 hours.</p>
            <p className="text-emerald-400 font-medium mt-2">support@ecom.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-zinc-800 text-emerald-400 rounded-xl text-xl">
            <FiPhone />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Call Us</h3>
            <p className="text-sm text-zinc-400 mt-1">Mon-Fri from 9am to 6pm IST.</p>
            <p className="text-emerald-400 font-medium mt-2">+00 00000 00000</p>
          </div>
        </div>

        {/* Office Location */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-zinc-800 text-emerald-400 rounded-xl text-xl">
            <FiMapPin />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Our Office</h3>
            <p className="text-sm text-zinc-400 mt-1">Visit our headquarters.</p>
            <p className="text-zinc-300 font-medium mt-2">
              000 Dummy Street, City, 000000
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-zinc-800 text-emerald-400 rounded-xl text-xl">
            <FiClock />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Working Hours</h3>
            <p className="text-sm text-zinc-400 mt-1">Customer service availability.</p>
            <p className="text-zinc-300 font-medium mt-2">
              Monday – Saturday: 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
