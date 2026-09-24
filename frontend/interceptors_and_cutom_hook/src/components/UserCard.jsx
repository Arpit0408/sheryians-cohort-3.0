import React from "react";
import { FiMail, FiPhone, FiMapPin, FiAtSign } from "react-icons/fi";

const UserCard = ({ user }) => {
  const { name, email, username, phone, address, id } = user;
  const fullName = `${name?.firstname || ""} ${name?.lastname || ""}`;
  const initial = name?.firstname ? name.firstname[0].toUpperCase() : "U";

  return (
    <div className="group bg-neutral-900/90 border border-neutral-800 hover:border-indigo-500/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm">
      <div>
        {/* Card Header: Avatar, Name & ID Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Gradient Avatar */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white shadow-md shadow-indigo-500/20 shrink-0">
              {initial}
            </div>

            <div>
              <h3 className="font-semibold text-white capitalize group-hover:text-indigo-400 transition-colors">
                {fullName}
              </h3>
              <div className="flex items-center gap-1 text-xs text-neutral-400 mt-0.5">
                <FiAtSign className="text-neutral-500" />
                <span>{username}</span>
              </div>
            </div>
          </div>

          {/* User ID Pill */}
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700/50">
            #{id}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-800/80 mb-4" />

        {/* Contact & Details Info */}
        <div className="space-y-2.5 text-xs text-neutral-300">
          {/* Email */}
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-neutral-800/80 text-neutral-400">
              <FiMail className="text-sm text-indigo-400" />
            </span>
            <span className="truncate" title={email}>
              {email}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-neutral-800/80 text-neutral-400">
              <FiPhone className="text-sm text-emerald-400" />
            </span>
            <span className="font-mono text-neutral-300">{phone}</span>
          </div>

          {/* Address */}
          {address && (
            <div className="flex items-start gap-2.5">
              <span className="p-1.5 rounded-lg bg-neutral-800/80 text-neutral-400 shrink-0 mt-0.5">
                <FiMapPin className="text-sm text-rose-400" />
              </span>
              <span className="capitalize text-neutral-400 leading-relaxed">
                {address.number} {address.street}, {address.city}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Action Button */}
      <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between">
        <span className="text-[11px] text-neutral-500 capitalize">
          Zip: {address?.zipcode || "N/A"}
        </span>
        <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300 hover:underline cursor-pointer">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default UserCard;
