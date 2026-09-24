import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const Form = ({ setToggle, setUsers, users, editUser, setEditUser }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
    },
  });
  useEffect(() => {
    if (editUser) {
      reset(editUser);
    }
  }, [editUser]);

  const formSubmit = (data) => {
    if (editUser) {
      setUsers((prev) =>
        prev.map((user) => (user.id === editUser.id ? data : user)),
      );
      reset();
      setEditUser(null);
      setToggle((prev) => !prev);
      return;
    }
    const newUser = { ...data, id: crypto.randomUUID() };
    // localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setUsers((prev) => [...prev, newUser]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Create user
            </h1>
            <p className="text-xs text-zinc-400 mt-0.5">
              Fill in the details below to add a new user
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setToggle((prev) => !prev);
              setEditUser(null);
            }}
            className="text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 p-1.5 rounded-lg transition-colors cursor-pointer"
            title="Close"
          >
            <IoClose size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Name
            </label>
            <input
              className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 ${
                errors.name
                  ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  : "border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              }`}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Name cannot exceed 30 characters",
                },
              })}
              type="text"
              placeholder="e.g. John Doe"
            />
            {errors.name && (
              <p className="text-xs text-rose-400 mt-0.5">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Email Address
            </label>
            <input
              className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 ${
                errors.email
                  ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  : "border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              placeholder="e.g. john@example.com"
            />
            {errors.email && (
              <p className="text-xs text-rose-400 mt-0.5">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Mobile Number
            </label>
            <input
              className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 ${
                errors.mobile
                  ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  : "border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              }`}
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Mobile number must be exactly 10 digits",
                },
              })}
              type="tel"
              placeholder="e.g. 9876543210"
            />
            {errors.mobile && (
              <p className="text-xs text-rose-400 mt-0.5">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-medium rounded-xl text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Add user</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
