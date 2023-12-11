import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTER } from '../../Utils/Constants';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add a state to store the error message

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email exists in local storage
    const existingUser = localStorage.getItem(email);
    if (!existingUser) {
      // If the email is not registered, show an error message
      setError('This email is not registered. Please use a different email or sign up.');
      return;
    }

    // Parse the user data from JSON to object
    const userObject = JSON.parse(existingUser);

    // Check if the password matches the stored password
    if (password === userObject.password) {
      // Handle successful login here (e.g., navigate to another page, store the token, etc.)
    } else {
      // Show an error message
      setError('Wrong password!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="w-full p-8 bg-white rounded shadow" style={{ maxWidth: '600px' }}>
  <h2 className="mb-4 text-2xl font-bold text-center text-gray-900">Sign in to Uko</h2>
  <div className="mb-4 flex justify-center">

    <span className="text-gray-500">New Here?</span>
    <Link to={APP_ROUTER.REGISTER}>
      <button className="ml-2 text-blue-500 hover:text-blue-700">Create an account!</button>
    </Link>
  </div>
  <div className="mb-4">
    <input
      className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-6">
    <input
      className="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="mb-4 text-center text-red-500 font-bold">{error}</div>
          <div className="flex items-center mb-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="rememberMe"
            />
            <label className="text-sm font-bold text-gray-700" htmlFor="rememberMe">
              Remember me
            </label>
            <a
              className="ml-auto text-sm font-bold text-red-500 hover:text-red-800"
              href="./forgot-password.html"
            >
              Forget Password
            </a>
          </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="relative mb-6">
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 text-gray-500 text-sm rounded">
            OR
          </span>
          <hr className="border-gray-400" />
        
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="w-full px-4 py-2 font-bold text-darkgray bg-white border border-blue-200 rounded-lg hover:bg-blue-200 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign in with Google
          </button>
          <button
            className="w-full px-4 py-2 font-bold text-darkgray bg-white border border-blue-200 rounded-lg hover:bg-blue-200 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign in with Facebook
          </button>
          <button
            className="w-full px-4 py-2 font-bold text-darkgray bg-white border border-blue-200 rounded-lg hover:bg-blue-200 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign in with Twitter
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
