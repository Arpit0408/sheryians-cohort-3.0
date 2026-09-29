import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiArrowRight, FiShield } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth.jsx";

const Login = () => {
  const { LoginForm, register, handleSubmit, errors } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 selection:bg-indigo-500 selection:text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card container */}
      <div className="relative w-full max-w-md bg-slate-900/80 border border-slate-800/80 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        {/* Top Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3 shadow-inner">
            <FiShield className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(LoginForm)}>
          {/* Email field */}
          <div className="space-y-2">
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
                {...register("email")}
                className="w-full pl-10 pr-4 py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Password
              </label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <FiLock className="w-5 h-5" />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                {...register("password")}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Sign In</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-center text-xs text-zinc-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
