"use client";

import React from 'react';

const Login = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <p className="mb-4">Login if you are a returning customer.</p>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2 form-checkbox text-pink-500" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#" className="text-pink-500 hover:text-black">Forgot Your Password?</a>
        </div>
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-black">Login</button>
      </form>
      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2 hover:bg-pink-600">Login with Facebook</button>
        <button className="w-full bg-red-500 text-white py-2 rounded-md mb-2 hover:bg-pink-600">Login with Google</button>
        <button className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-pink-500">Login with Twitter</button>
      </div>
      <p className="mt-4">Don't Have an Account? <a href="#" className="text-pink-500 hover:text-black">Sign up now</a></p>
    </div>
  );
};

const CreateAccount = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <p className="mb-4">Register here if you are a new customer.</p>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input type="text" placeholder="Username" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="mr-2 form-checkbox text-pink-500" />
          <label htmlFor="terms">I have read and agree to the terms & conditions</label>
        </div>
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">Submit & Register</button>
      </form>
    </div>
  );
};

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full max-w-5xl">
        <Login />
        <CreateAccount />
      </div>
    </div>
  );
};

export default AuthPage;
