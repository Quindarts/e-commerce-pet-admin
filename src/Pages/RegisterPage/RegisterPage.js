import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTER } from '../../Utils/Constants';
import Textfield from '../../Components/ui/Textfield/Textfield';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    // Create a new user object
    const newUser = { firstName, lastName, email, password };

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      const data = await response.json();
      console.log("API response: ", data);
    } catch (error) {
      console.error("Error during API call: ", error);
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    users.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(users));
  
    console.log(newUser); 
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full p-8 bg-white rounded shadow" style={{ maxWidth: '600px' }}>  
        <div className="mb-4 flex flex-col gap-4 justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-900">Sign up to Uko</h2>
          <div className="flex justify-center">
            <span className="text-gray-500">Have an account?</span>
            <Link to={APP_ROUTER.LOGIN}>
              <button className="ml-2 text-blue-500">Login</button>
            </Link>
          </div>
        </div>
        <div className=" grid md:flex md:justify-between">
          <Textfield
            className="w-full px-3 py-1 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline mb-4 md:mb-0 md:mr-2"
            id="firstName"
            type="text"
           label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            pattern="^[a-zA-Z\s]*$"
            helperText={<span style={{color: firstName && /^[a-zA-Z\s]*$/.test(firstName) ? "#ffffff" : "#ff0000"}}>Only alphabets and spaces are allowed.</span>}
            error={firstName && !/^[a-zA-Z\s]*$/.test(firstName)}
          />
             <Textfield
            className="w-full px-3 py-1 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline mt-4 md:mt-0 md:ml-2"
            id="lastName"
            type="text"
           label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            pattern="^[a-zA-Z\s]*$"
            helperText={<span style={{color: lastName && /^[a-zA-Z\s]*$/.test(lastName) ? "#ffffff" : "#ff0000"}}>Only alphabets and spaces are allowed.</span>}
            error={lastName && !/^[a-zA-Z\s]*$/.test(lastName)}
          />
        </div>
        <div className="mb-4">
          <Textfield
            className="w-full px-3 py-1 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline mb-4"
            id="email"
            type="email"
           label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            helperText={<span style={{color: email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "#ffffff" : "#ff0000"}}>Invalid email format.</span>}
            error={email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)}
             />
        </div>
        <div className="mb-4">
          <Textfield
            className="w-full px-3 py-1 mb-3 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
           label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            helperText={<span style={{color: password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) ? "#ffffff" : "#ff0000"}}>Minimum eight characters, at least one letter and one number.</span>}
            error={password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)}
            />
        </div>
        <div className="mb-4">
          <Textfield
            className="w-full px-3 py-1 mb-3 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
           label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            helperText={<span style={{color: confirmPassword && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword) ? "#ffffff" : "#ff0000"}}>Minimum eight characters, at least one letter and one number.</span>}
            error={confirmPassword && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword)}
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
