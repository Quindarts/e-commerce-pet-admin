import { Routes, Route } from 'react-router-dom'
import ComponentPage from '../Pages/ComponentPage'
import MainLayout from '../Layout/MainLayout/MainLayout'
import { APP_ROUTER } from '../Utils/Constants'
import HomePage from '../Pages/Home/HomePage'
import ProductPage from '../Pages/ProductPage/ProductPage'
import OrderPage from '../Pages/OrderPage/OrderPage'
import UserPage from '../Pages/UserPage/UserPage'
function Routing() {
    return (
        <Routes>
            <Route path={APP_ROUTER.INDEX} element={<MainLayout />}>
                <Route index path={APP_ROUTER.HOME} element={<HomePage />} />
                <Route path={APP_ROUTER.PRODUCT} element={<ProductPage />} />
                <Route path={APP_ROUTER.ORDER} element={<OrderPage />} />
                <Route path={APP_ROUTER.USER} element={<UserPage />} />
                <Route path={APP_ROUTER.HOME} element={<HomePage />} />
                <Route path={APP_ROUTER.COMPONENT} element={<ComponentPage />} />
            </Route>
        </Routes>
    )
}

export default Routing
