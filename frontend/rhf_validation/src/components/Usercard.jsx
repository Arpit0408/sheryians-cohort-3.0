import React from "react";

const Usercard = ({ user, setToggle, setUsers, setEditUser, handleDelete }) => {
  const handleUpdate = () => {
    setToggle((prev) => !prev);
    setEditUser(user);
  };

  return (
    <div className="w-64 bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 shadow-xl flex flex-col gap-3 transition-all duration-200 group">
      <div className="w-full h-44 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 flex items-center justify-center">
        {user?.image ? (
          <img
            className="object-cover h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-300"
            src={user.image}
            alt={user.name || "User"}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-400 font-bold text-xl">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        <h2 className="text-base font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors">
          {user?.name}
        </h2>
        <p className="text-xs text-zinc-400 truncate">{user?.email}</p>
        <p className="text-xs text-zinc-500">{user?.contact || user?.mobile}</p>
      </div>

      <div className="flex w-full items-center gap-2 pt-2 border-t border-zinc-800/60 mt-auto">
        <button
          onClick={() => handleUpdate(user.id)}
          className="flex-1 py-2 px-3 bg-amber-500/10 hover:bg-amber-500/20 active:scale-95 text-amber-300 border border-amber-500/20 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer text-center"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="flex-1 py-2 px-3 bg-rose-500/10 hover:bg-rose-500/20 active:scale-95 text-rose-300 border border-rose-500/20 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer text-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
