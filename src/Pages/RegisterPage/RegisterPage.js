import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTER } from '../../Utils/Constants';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add a state to store the error message
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    // Create a new user object
    const newUser = { firstName, lastName, email, password };
  
    // Get the existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Add the new user to the array
    users.push(newUser);
  
    // Save the updated array to local storage
    localStorage.setItem("users", JSON.stringify(users));
  
    console.log(newUser); // Log the user data
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
<form onSubmit={handleSubmit} className="w-full p-8 bg-white rounded shadow" style={{ maxWidth: '600px' }}>  
<div className="mb-4 flex flex-col gap-4 justify-center"> {/* Change the layout of the h2 and the div */}
<h2 className="text-2xl font-bold text-center text-gray-900">Sign up to Uko</h2> {/* Change the text from "Sign in" to "Sign up" */}
<div className="flex justify-center">

    <span className="text-gray-500">Have an account?</span>
    <Link to={APP_ROUTER.LOGIN}>
      <button className="ml-2 text-blue-500">Login</button>
    </Link>
  </div>
  </div>

  <div className="mb-8 grid md:flex md:justify-between">
    <input
      className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-4 md:mb-0 md:mr-2"
      id="firstName"
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <input
      className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mt-4 md:mt-0 md:ml-2"
      id="lastName"
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <input
      className="w-full px-3 py-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-4"
      id="email"
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <input
      className="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="mb-4">
  <input
    className="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    id="confirmPassword"
    type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
</div>

  <div className="mb-4 text-center text-red-500 font-bold">{error}</div>
        
        <div className="mb-6 text-center">
    <button
      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Sign Up
    </button>
    <p className="mt-4 text-sm text-gray-500">By signing up, I agree to UI Lib Terms of Service & Privacy Policy</p>
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

export default RegisterPage;
