import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTER } from '../../Utils/Constants'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Textfield from '../../Components/ui/Textfield/Textfield'
import { useSnackbar } from 'notistack'

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one digit')
        .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
})

function LoginPage() {
    const { enqueueSnackbar } = useSnackbar()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find((user) => user.email === email && user.password === password)
        if (!user) {
            enqueueSnackbar('Invalid email or password', { variant: 'error' })
            return
        }
        if (user.role !== 'admin') {
            enqueueSnackbar('You do not have the necessary authorities to access this page', { variant: 'error' })
            return
        }

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const contentType = response.headers.get('content-type')
            if (contentType && contentType.indexOf('application/json') !== -1) {
                const data = await response.json()
                console.log('API response: ', data)
                enqueueSnackbar('Logged in successfully', { variant: 'success' })
            } else {
                console.error("Oops, we haven't got JSON!")
            }
        } catch (error) {
            enqueueSnackbar('An error occurred', { variant: 'error' })
            console.error('Error during API call: ', error)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Formik
                initialValues={{ password: '', email: '' }}
                validationSchema={schema}
                onSubmit={async (values, actions) => {
                    try {
                        const response = await fetch('http://localhost:3000/auth/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email, password }),
                        })

                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`)
                        }

                        const contentType = response.headers.get('content-type')
                        if (contentType && contentType.indexOf('application/json') !== -1) {
                            const data = await response.json()
                            console.log('API response: ', data)
                        } else {
                            console.error("Oops, we haven't got JSON!")
                        }
                    } catch (error) {
                        console.error('Error during API call: ', error)
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-full rounded bg-white p-8 shadow"
                        style={{ maxWidth: '600px' }}
                    >
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">Sign in to Uko</h2>
                        <div className="mb-4 flex justify-center">
                            <span className="text-gray-500">New Here?</span>
                            <Link to={APP_ROUTER.REGISTER}>
                                <button className="ml-2 text-blue-500 hover:text-blue-700">Create an account!</button>
                            </Link>
                        </div>
                        <div className="mb-4">
                            <Field
                                name="email"
                                render={({ field, form }) => (
                                    <Textfield
                                        {...field}
                                        field={field}
                                        form={form}
                                        className="focus:shadow-outline w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                        id="email"
                                        type="email"
                                        label="Email"
                                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                        helperText={
                                            <span
                                                style={{
                                                    color:
                                                        field.value &&
                                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                                            field.value,
                                                        ),
                                                }}
                                            >
                                                Invalid email Format.
                                            </span>
                                        }
                                        error={
                                            field.value &&
                                            field.value.length > 0 &&
                                            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(field.value)
                                        }
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6">
                            <Field
                                name="password"
                                render={({ field, form }) => (
                                    <Textfield
                                        {...field}
                                        field={field}
                                        form={form}
                                        className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                        id="password"
                                        type="password"
                                        label="Password"
                                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                        helperText={
                                            <span
                                                style={{
                                                    color:
                                                        field.value &&
                                                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(field.value)
                                                            ? '#ffffff'
                                                            : '#ff0000',
                                                }}
                                            >
                                                Minimum eight characters, at least one letter and one number.
                                            </span>
                                        }
                                        error={
                                            field.value &&
                                            field.value.length > 0 &&
                                            !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(field.value)
                                        }
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input className="mr-2 leading-tight" type="checkbox" id="rememberMe" />
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
                                className="focus:shadow-outline w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="relative mb-6">
                            <span className="transForm absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 text-sm text-gray-500">
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
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginPage
