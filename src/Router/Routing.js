import { redirect, createBrowserRouter, useNavigate, Route } from 'react-router-dom'
import ComponentPage from '../Pages/ComponentPage'
import MainLayout from '../Layout/MainLayout/MainLayout'
import { APP_ROUTER } from '../Utils/Constants'
import HomePage from '../Pages/Home/HomePage'
import ProductPage from '../Pages/ProductPage/ProductPage'
import OrderPage from '../Pages/OrderPage/OrderPage'
import UserPage from '../Pages/UserPage/UserPage'
import AuthLayout from '../Layout/AuthLayout/AuthLayout'

import { loaderUser } from './loader/loaderAuth'
import CategoryPage from '../Pages/CategoryPage/CategoryPage'
import Login from '../Pages/Auth/Login/Login'
import Register from '../Pages/Auth/Register/Register'
import ListCategoryPage from '../Pages/CategoryPage/List'
import CategoryAddPage from '../Pages/CategoryPage/Add'
const router = createBrowserRouter([
    {
        path: APP_ROUTER.INDEX,
        loader: (request) => loaderUser(request),
    },
    {
        path: APP_ROUTER.INDEX,
        element: <MainLayout />,
        children: [
            {
                path: APP_ROUTER.HOME,
                element: <HomePage />,
                index: true,
            },
            {
                path: APP_ROUTER.PRODUCT,
                element: <ProductPage />,
            },
            {
                path: APP_ROUTER.CATEGORY,
                element: <CategoryPage />,
                children: [
                    { path: APP_ROUTER.CATEGORY_LIST, element: <ListCategoryPage />, index: true },
                    { path: APP_ROUTER.CATEGORY_ADD, element: <CategoryAddPage />, index: true },
                ],
            },
            {
                path: APP_ROUTER.ORDER,
                element: <OrderPage />,
            },
            {
                path: APP_ROUTER.USER,
                element: <UserPage />,
            },
            {
                path: APP_ROUTER.COMPONENT,
                element: <ComponentPage />,
            },
        ],
    },
    {
        path: APP_ROUTER.AUTH,
        element: <AuthLayout />,
        children: [
            {
                path: APP_ROUTER.LOGIN,
                element: <Login />,
                index: true,
            },
            {
                path: APP_ROUTER.REGISTER,
                element: <Register />,
            },
        ],
    },
])

export default router
