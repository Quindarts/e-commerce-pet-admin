import React from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTER } from '../../Utils/Constants'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
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

function Login() {
    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async (values, actions) => {
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            if (!data.user) {
                enqueueSnackbar('This account has not been registered', { variant: 'error' })
                return
            }

            if (!data.success) {
                enqueueSnackbar('Invalid password', { variant: 'error' })
                return
            }

            if (data.user.role !== 'admin') {
                enqueueSnackbar('You are not an Admin', { variant: 'error' })
                return
            }

            enqueueSnackbar(data.message, { variant: 'success' })
        } catch (error) {
            enqueueSnackbar('An error occurred', { variant: 'error' })
            console.error('Error during API call: ', error)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Formik initialValues={{ password: '', email: '' }} validationSchema={schema} onSubmit={handleSubmit}>
                {({ isSubmitting, handleBlur, handleChange, values, errors, touched }) => (
                    <Form className="w-full rounded bg-white p-8 shadow" style={{ maxWidth: '600px' }}>
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">Sign in to Uko</h2>
                        <div className="mb-4 flex justify-center">
                            <span className="text-gray-500">New Here?</span>
                            <Link to={APP_ROUTER.REGISTER}>
                                <button className="ml-2 text-blue-500 hover:text-blue-700">Create an account!</button>
                            </Link>
                        </div>
                        <div className="mb-4">
                            <Textfield
                                placeholder="example@gmail.com"
                                className="focus:shadow-outline w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                label="Email address"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                helperText={touched.email && errors.email ? errors.email : ''}
                                error={touched.email && errors.email ? true : false}
                            />
                        </div>
                        <div className="mb-6">
                            <Textfield
                                name="password"
                                id="password"
                                className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                label="Password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                helperText={touched.password && errors.password ? errors.password : ''}
                                error={touched.password && errors.password ? true : false}
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

export default Login
