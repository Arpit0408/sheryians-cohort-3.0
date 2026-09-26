import React from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiArrowRight,
  FiUserPlus,
} from "react-icons/fi";
import { useAuth } from "../hooks/useAuth.jsx";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    navigate,
    getValues,
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 selection:bg-indigo-500 selection:text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card container */}
      <div className="relative w-full max-w-md bg-slate-900/80 border border-slate-800/80 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        {/* Top Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3 shadow-inner">
            <FiUserPlus className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Create an Account
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Sign up today to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(registerForm)}>
          {/* Full Name field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <FiUser className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Name must be at most 30 characters long",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Name must contain only alphabets",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <FiMail className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Email is invalid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <FiLock className="w-5 h-5" />
              </span>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full pl-10 pr-10 py-2.5 bg-zinc-950/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1.5">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <FiEye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Confirm Password field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <FiLock className="w-5 h-5" />
              </span>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1.5">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Create Account</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-center text-xs text-zinc-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
