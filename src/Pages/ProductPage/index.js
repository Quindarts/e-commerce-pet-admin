import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductPage() {
  return (
    <Box>
    <Outlet/>
    </Box>
  )
}

export default ProductPage