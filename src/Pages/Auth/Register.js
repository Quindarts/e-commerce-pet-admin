import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTER } from '../../Utils/Constants';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Textfield from '../../Components/ui/Textfield/Textfield';
import { useSnackbar } from 'notistack';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
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
});

function Register() {
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values, actions) => {
        
        if (values.password !== values.confirmPassword) {
            enqueueSnackbar('Passwords do not match!', { variant: 'error' });
            return;
        }

        try {
            const response = await fetch('https://e-commerce-pet-server-quindarts.vercel.app/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                enqueueSnackbar(data.message, { variant: 'success' });
            } else {
                enqueueSnackbar(data.message, { variant: 'error' });
            }
        } catch (error) {
            enqueueSnackbar('An error occurred', { variant: 'error' });
            console.error('Error during API call: ', error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Formik initialValues={{ firstName: '', lastName: '', password: '', email: '', confirmPassword: '' }} validationSchema={schema} onSubmit={handleSubmit}>
                {({ isSubmitting, handleBlur, handleChange, values, errors, touched }) => (
                    <Form className="w-full rounded bg-white p-8 shadow" style={{ maxWidth: '600px' }}>
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">Sign up to Uko</h2>
                        <div className="mb-4 flex justify-center">
                            <span className="text-gray-500">Have an account?</span>
                            <Link to={APP_ROUTER.LOGIN}>
                                <button className="ml-2 text-blue-500 hover:text-blue-700">Login</button>
                            </Link>
                        </div>
                        <div className=" grid md:flex md:justify-between">
                            <Textfield
                                placeholder="First Name"
                                className="focus:shadow-outline mb-4 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none md:mb-0 md:mr-2"
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
                                className="focus:shadow-outline mt-4 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none md:ml-2 md:mt-0"
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
                        <div className="mb-4">
                            <Textfield
                                placeholder="Confirm Password"
                                className="focus:shadow-outline mb-3 w-full appearance-none px-3 py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                helperText={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
                                error={touched.confirmPassword && errors.confirmPassword ? true : false}
                            />
                        </div>
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
    );
}

export default Register;
