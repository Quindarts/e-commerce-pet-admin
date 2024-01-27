import React from 'react'
import ListCategoryPage from './List'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function CategoryPage() {
    return (
        <Box className="w-full ">
            <Outlet />
        </Box>
    )
}

export default CategoryPage
