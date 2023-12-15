import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTER } from '../../Utils/Constants';
import Textfield from '../../Components/ui/Textfield/Textfield';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        console.log("API response: ", data);
      } else {
        console.error("Oops, we haven't got JSON!");
      }
    } catch (error) {
      console.error("Error during API call: ", error);
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      console.log(user); 
    } else {
      setError("Invalid email or password");
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
          <Textfield
            className="w-full px-3 py-1 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            helperText={<span style={{color: email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "#ffffff" : "#ff0000"}}>Invalid email format.</span>}
            error={email && email.length > 0 && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)}
          />
        </div>
        <div className="mb-6">
          <Textfield
            className="w-full px-3 py-1 mb-3 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            helperText={<span style={{color: password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) ? "#ffffff" : "#ff0000"}}>Minimum eight characters, at least one letter and one number.</span>}
            error={password && password.length > 0 && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)}
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
