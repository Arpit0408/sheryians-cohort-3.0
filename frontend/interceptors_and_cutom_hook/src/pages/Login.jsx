import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import AuthHook from "../hooks/useAuth";
const Login = () => {
  let { register, LoginformSubmit, handleSubmit, reset, errors } = AuthHook();
  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mb-3 border border-indigo-500/20">
          <FiLogIn className="text-xl" />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Form (UI only - add your functionality here) */}
      <form className="space-y-5" onSubmit={handleSubmit(LoginformSubmit)}>
        {/* Email Field */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-2">
            Email address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
              <FiMail className="text-base" />
            </span>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              placeholder="name@example.com"
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-950/80 border border-neutral-800 rounded-xl text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-medium text-neutral-300">
              Password
            </label>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
              <FiLock className="text-base" />
            </span>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "password is required" })}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-950/80 border border-neutral-800 rounded-xl text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 active:scale-[0.99] cursor-pointer"
        >
          Sign In
        </button>
      </form>

      {/* Footer Link to Register */}
      <div className="mt-6 text-center text-xs text-neutral-400">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
        >
          Create account
        </Link>
      </div>
    </div>
  );
};

export default Login;
