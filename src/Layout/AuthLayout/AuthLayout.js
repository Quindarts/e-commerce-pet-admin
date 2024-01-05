import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <Box>
            <main>
                <Outlet />
            </main>
        </Box>
    )
}

export default AuthLayout
