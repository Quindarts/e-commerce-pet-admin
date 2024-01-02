import React from 'react'
import { Link } from 'react-router-dom'
import { APP_ICON, COLOR, APP_ROUTER } from '../../Utils/Constants'
import * as yup from 'yup'
import Textfield from '../../Components/ui/Textfield/Textfield'
import { useSnackbar } from 'notistack'
import axiosConfig from './axios'
import './style.js'
import { Icon } from '@iconify/react'
import Button from '../../Components/ui/Button/Button'
import ukoLogo from '../../assets/img/ukoLogo.png'
import sideImage from '../../assets/img/sideImage.png'
import { Grid, Image, FormContainer, Box, Checkbox } from './style'

const schema = yup.object().shape({
    userName: yup
        .string()
        .required('Username is required')
        .min(8, 'Username must be at least 8 characters')
        .max(32, 'Username must be no more than 32 characters')
        .matches(/[A-Za-z]/, 'Username must include at least one letter')
        .matches(/\d/, 'Username must include at least one number')
        .matches(/^[a-zA-Z0-9]+$/, 'Username cannot include special characters'),

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
        console.log(values)
        console.log('hello')

        // try {
        const response = await axiosConfig.post('/auth/login', values)
        console.log(response)
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
        // } catch (error) {
        //     enqueueSnackbar('An error occurred', { variant: 'error' })
        //     console.error('Error during API call: ', error)
        // }
    }

    return (
        <Grid className="grid-template-areas-2 md:grid-template-areas-4 grid min-h-screen bg-gray-100">
            <FormContainer
                className="form"
                initialValues={{ userName: '', password: '' }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, handleBlur, handleChange, values, errors, touched }) => (
                    <Box className=" w-full justify-self-center px-8 pb-16 pt-8">
                        <div className="mb-6 flex items-center justify-center">
                            <img src={ukoLogo} width="40" alt="Logo"></img>
                        </div>

                        <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">Sign in to Uko</h2>
                        <div className="mb-4 flex justify-center text-sm font-semibold">
                            <span className="mb-5 text-gray-400">New Here?</span>
                            <Link to={APP_ROUTER.REGISTER}>
                                <span className="ml-2 text-blue-400">Create an account!</span>
                            </Link>
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
                        <div className="mb-6 mt-4 flex items-center">
                            <Checkbox className="mr-2 leading-tight" type="checkbox" id="rememberMe" />
                            <label className="text-xs font-bold text-gray-700" htmlFor="rememberMe">
                                Remember me
                            </label>
                            <a className="ml-auto text-xs font-bold text-red-500" href="./forgot-password.html">
                                Forget Password
                            </a>
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
                        </div>
                        <div className="relative mb-10">
                            <span className="transForm absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-gray-100 px-2 py-1 text-sm font-bold text-gray-400">
                                OR
                            </span>
                            <hr className="border-gray-300" />
                        </div>
                        <div className=" flex flex-col gap-4">
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border  border-blue-200 bg-gray-100 px-4 py-2 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-xl" icon={APP_ICON.i_google} />{' '}
                                <span className="text-sm font-normal text-gray-800">Signin with Google</span>
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-2 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-xl" icon={APP_ICON.i_facebook} />
                                <span className="text-sm font-normal text-gray-800"> Signin with Facebook</span>
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-2 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-lg" icon={APP_ICON.i_twitter} />
                                <span className="text-sm font-normal text-gray-800"> Signin with Twitter</span>
                            </Button>
                        </div>
                    </Box>
                )}
            </FormContainer>
            <Image className="image " src={sideImage} alt="Unsplash Image" />
        </Grid>
    )
}

export default Login
