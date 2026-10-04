import { Link } from "react-router";
import {
  User,
  Lock,
  LogIn,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    loginForm,
    showPassword,
    setShowPassword,
  } = useAuth();

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 text-slate-100 overflow-hidden select-none">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-xl shadow-indigo-500/30 ring-4 ring-indigo-500/10 mb-4 transition-transform hover:scale-105 duration-300">
            <LogIn className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Welcome back
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-normal">
            Enter your details to access your account
          </p>
        </div>

        {/* Card with Gradient Border */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-b from-white/15 via-slate-800/40 to-white/5 shadow-2xl shadow-black/80">
          <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8">
            <form
              className="space-y-5"
              onSubmit={handleSubmit(
                (data) => loginForm(data),
                (errors) => console.log("Validation Errors:", errors),
              )}
            >
              {/* Username Field */}
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    autoComplete="username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    className={`w-full pl-11 pr-4 py-3 bg-slate-950/60 border rounded-xl text-slate-100 placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.username
                        ? "border-rose-500/60 focus:ring-rose-500/30 focus:border-rose-500"
                        : "border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500 focus:bg-slate-950/90"
                    }`}
                  />
                </div>
                {errors.username && (
                  <p className="text-xs text-rose-400 flex items-center gap-1.5 font-medium animate-fadeIn">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.username.message}</span>
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Password
                  </label>
                  <a
                    href="#forgot-password"
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters are required",
                      },
                    })}
                    className={`w-full pl-11 pr-11 py-3 bg-slate-950/60 border rounded-xl text-slate-100 placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.password
                        ? "border-rose-500/60 focus:ring-rose-500/30 focus:border-rose-500"
                        : "border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500 focus:bg-slate-950/90"
                    }`}
                  />
                  {/* Toggle Password Visibility */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-rose-400 flex items-center gap-1.5 font-medium animate-fadeIn">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.password.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={() => console.warn("Submit button clicked directly!")}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-400 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.98] cursor-pointer mt-2"
              >
                <span>Sign in</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* Footer / Switch to Register */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
              <p className="text-sm text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors hover:underline"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
