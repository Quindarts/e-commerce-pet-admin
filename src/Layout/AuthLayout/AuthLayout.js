import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div>
            AuthLayout
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AuthLayout
