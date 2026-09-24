import React from 'react';

const Login = ({setToggle}) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-emerald-500 focus:outline-none" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-emerald-500 focus:outline-none" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300" >
            Log In
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          New user? <span className="text-emerald-500 hover:underline cursor-pointer" onClick={() => setToggle(false)}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
