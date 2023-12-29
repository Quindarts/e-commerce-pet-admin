import React from 'react'
import { Link } from 'react-router-dom'
import { APP_ICON, APP_ROUTER } from '../../Utils/Constants'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import Textfield from '../../Components/ui/Textfield/Textfield'
import { useSnackbar } from 'notistack'
import './style.css'
import { Icon } from '@iconify/react'
import Button from '../../Components/ui/Button/Button'
const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is required')
        .matches(/^[a-zA-Z]+$/, 'First name should only contain alphabets'),
    lastName: yup
        .string()
        .required('Last name is required')
        .matches(/^[a-zA-Z]+$/, 'Last name should only contain alphabets'),
    userName: yup
        .string()
        .required('Username is required')
        .min(8, 'Username must be at least 8 characters')
        .max(32, 'Username must be no more than 32 characters')
        .matches(/[A-Za-z]/, 'Username must include at least one letter')
        .matches(/\d/, 'Username must include at least one number')
        .matches(/^[a-zA-Z0-9]+$/, 'Username cannot include special characters'),

    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one digit')
        .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

function Register() {
    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async (values, actions) => {
        if (values.password !== values.confirmPassword) {
            enqueueSnackbar('Passwords do not match!', { variant: 'error' })
            return
        }

        try {
            const response = await fetch('https://e-commerce-pet-server-quindarts.vercel.app/auth/register', {
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

            if (data.success) {
                enqueueSnackbar(data.message, { variant: 'success' })
            } else {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
        } catch (error) {
            enqueueSnackbar('An error occurred', { variant: 'error' })
            console.error('Error during API call: ', error)
        }
    }

    return (
        <div className="grid-template-areas-2 md:grid-template-areas-4 grid bg-gray-100">
            <Formik
                initialValues={{ firstName: '', lastName: '', password: '', email: '', confirmPassword: '' }}
                validationSchema={schema}
                onSubmit={handleSubmit}
                className="form"
            >
                {({ isSubmitting, handleBlur, handleChange, values, errors, touched }) => (
                    <Form className="box w-full justify-self-center px-8 pb-16 pt-8">
                        <div className="mb-6 flex items-center justify-center">
                            <img src="https://uko-react.vercel.app/static/logo/logo.svg" width="40" alt="Logo"></img>
                        </div>
                        <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">Signin Up to Uko</h2>
                        <div className="mb-4 flex justify-center">
                            <span className="mb-5 text-gray-500">New Here?</span>
                            <Link to={APP_ROUTER.LOGIN}>
                                <span className=" ml-2 text-blue-500 hover:text-blue-700">Login</span>
                            </Link>
                        </div>
                        <div className="mb-4 grid px-3 py-1 md:flex md:justify-between">
                            <Textfield
                                placeholder="First Name"
                                className="focus:shadow-outline mb-6 w-full appearance-none text-sm leading-tight text-gray-700 focus:outline-none md:mb-0 md:mr-2"
                                id="firstName"
                                type="text"
                                label="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                helperText={touched.firstName && errors.firstName ? errors.firstName : ''}
                                error={touched.firstName && errors.firstName ? true : false}
                            />
                            <Textfield
                                placeholder="Last Name"
                                className="focus:shadow-outline w-full appearance-none text-sm leading-tight text-gray-700 focus:outline-none md:ml-2 md:mt-0"
                                id="lastName"
                                type="text"
                                label="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                helperText={touched.lastName && errors.lastName ? errors.lastName : ''}
                                error={touched.lastName && errors.lastName ? true : false}
                            />
                        </div>
                        <div className=" mb-4 grid md:flex md:justify-between">
                            <Textfield
                                className="focus:shadow-outline w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                label="Username"
                                id="userName"
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                                helperText={touched.userName && errors.userName ? errors.userName : ''}
                                error={touched.userName && errors.userName ? true : false}
                            />
                        </div>
                        <div className="mb-4">
                            <Textfield
                                placeholder="example@gmail.com"
                                className="focus:shadow-outline mb-4 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="email"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                helperText={touched.email && errors.email ? errors.email : ''}
                                error={touched.email && errors.email ? true : false}
                            />
                        </div>
                        <div className="mb-4">
                            <Textfield
                                placeholder="Password"
                                className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="password"
                                type="password"
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                helperText={touched.password && errors.password ? errors.password : ''}
                                error={touched.password && errors.password ? true : false}
                            />
                        </div>
                        <div className="mb-5">
                            <Textfield
                                placeholder="Confirm Password"
                                className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                helperText={
                                    touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''
                                }
                                error={touched.confirmPassword && errors.confirmPassword ? true : false}
                            />
                        </div>
                        <div className="mb-10 text-center">
                            <Button
                                className="focus:shadow-outline w-full px-4 py-2 font-bold focus:outline-none"
                                type="submit"
                                color="primary"
                                size="sm"
                            >
                                Sign Up
                            </Button>
                            <p className="mt-1 text-sm text-gray-500">
                                By signing up, I agree to UI Lib{' '}
                                <span className="cursor-pointer text-blue-500 hover:text-blue-700">
                                    Terms of Service & Privacy Policy
                                </span>
                            </p>
                        </div>
                        <div className="relative mb-10">
                            <span className="transForm absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-500">
                                OR
                            </span>
                            <hr className="border-gray-400" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border  border-blue-200 bg-gray-100 px-4 py-2 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon icon={APP_ICON.i_google} /> Signin with Google
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-2 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon icon={APP_ICON.i_facebook} /> Signin in with Facebook
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-2 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon icon={APP_ICON.i_twitter} />
                                Signin in with Twitter
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <img
                className="image "
                src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Unsplash Image"
            />
        </div>
    )
}

export default Register
