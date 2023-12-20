import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTER } from '../../Utils/Constants'
import Textfield from '../../Components/ui/Textfield/Textfield'

function RegisterPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setError('Passwords do not match!')
            return
        }

        const newUser = { firstName, lastName, email, password }

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })

            const data = await response.json()
            console.log('API response: ', data)
        } catch (error) {
            console.error('Error during API call: ', error)
        }

        const users = JSON.parse(localStorage.getItem('users')) || []

        users.push(newUser)

        localStorage.setItem('users', JSON.stringify(users))

        console.log(newUser)
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full rounded bg-white p-8 shadow" style={{ maxWidth: '600px' }}>
                <div className="mb-4 flex flex-col justify-center gap-4">
                    <h2 className="text-center text-2xl font-bold text-gray-900">Sign up to Uko</h2>
                    <div className="flex justify-center">
                        <span className="text-gray-500">Have an account?</span>
                        <Link to={APP_ROUTER.LOGIN}>
                            <button className="ml-2 text-blue-500">Login</button>
                        </Link>
                    </div>
                </div>
                <div className=" grid md:flex md:justify-between">
                    <Textfield
                        className="focus:shadow-outline mb-4 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none md:mb-0 md:mr-2"
                        id="firstName"
                        type="text"
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        pattern="^[a-zA-Z\s]*$"
                        helperText={
                            <span
                                style={{ color: firstName && /^[a-zA-Z\s]*$/.test(firstName) ? '#ffffff' : '#ff0000' }}
                            >
                                Only alphabets and spaces are allowed.
                            </span>
                        }
                        error={firstName && !/^[a-zA-Z\s]*$/.test(firstName)}
                    />
                    <Textfield
                        className="focus:shadow-outline mt-4 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none md:ml-2 md:mt-0"
                        id="lastName"
                        type="text"
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        pattern="^[a-zA-Z\s]*$"
                        helperText={
                            <span style={{ color: lastName && /^[a-zA-Z\s]*$/.test(lastName) ? '#ffffff' : '#ff0000' }}>
                                Only alphabets and spaces are allowed.
                            </span>
                        }
                        error={lastName && !/^[a-zA-Z\s]*$/.test(lastName)}
                    />
                </div>
                <div className="mb-4">
                    <Textfield
                        className="focus:shadow-outline mb-4 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                        id="email"
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        helperText={
                            <span
                                style={{
                                    color:
                                        email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
                                            ? '#ffffff'
                                            : '#ff0000',
                                }}
                            >
                                Invalid email format.
                            </span>
                        }
                        error={email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)}
                    />
                </div>
                <div className="mb-4">
                    <Textfield
                        className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                        id="password"
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                        helperText={
                            <span
                                style={{
                                    color:
                                        password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
                                            ? '#ffffff'
                                            : '#ff0000',
                                }}
                            >
                                Minimum eight characters, at least one letter and one number.
                            </span>
                        }
                        error={password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)}
                    />
                </div>
                <div className="mb-4">
                    <Textfield
                        className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                        id="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                        helperText={
                            <span
                                style={{
                                    color:
                                        confirmPassword &&
                                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword)
                                            ? '#ffffff'
                                            : '#ff0000',
                                }}
                            >
                                Minimum eight characters, at least one letter and one number.
                            </span>
                        }
                        error={confirmPassword && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword)}
                    />
                </div>
                <div className="mb-4 text-center font-bold text-red-500">{error}</div>
                <div className="mb-6 text-center">
                    <button
                        className="focus:shadow-outline w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <p className="mt-4 text-sm text-gray-500">
                        By signing up, I agree to UI Lib Terms of Service & Privacy Policy
                    </p>
                </div>
                <div className="relative mb-6">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded bg-white px-2 py-1 text-sm text-gray-500">
                        OR
                    </span>
                    <hr className="border-gray-400" />
                </div>
                <div className="flex flex-col gap-4">
                    <button
                        className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-white px-4 py-2 font-bold hover:bg-blue-200 focus:outline-none"
                        type="button"
                    >
                        Sign in with Google
                    </button>
                    <button
                        className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-white px-4 py-2 font-bold hover:bg-blue-200 focus:outline-none"
                        type="button"
                    >
                        Sign in with Facebook
                    </button>
                    <button
                        className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-white px-4 py-2 font-bold hover:bg-blue-200 focus:outline-none"
                        type="button"
                    >
                        Sign in with Twitter
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
