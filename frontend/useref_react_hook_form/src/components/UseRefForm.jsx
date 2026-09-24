import React, { useRef } from "react";

const useRefForm = () => {
  const formData = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.current.name?.value,
      email: formData.current.email?.value,
      age: formData.current.age?.value,
    };
    console.log("Form Submitted:", data);
    alert(`Form Data:\nName: ${data.name}\nEmail: ${data.email}\nAge: ${data.age}`);
  };

  return (
    <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-7 shadow-2xl backdrop-blur">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">
          useRef Form
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Uncontrolled form using a single useRef object container
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            Name
          </label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            ref={(e) => (formData.current.name = e)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="e.g. john@example.com"
            ref={(e) => (formData.current.email = e)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
            Age
          </label>
          <input
            type="number"
            placeholder="e.g. 21"
            ref={(e) => (formData.current.age = e)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition duration-150 cursor-pointer"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default useRefForm;

