import React from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../../Components/ui/Button/Button'
import { ProductPageTable } from './ProductPageComponents/ProductsPageTable'
import { Card } from './styles'

const ProductPage = () => {
    return (
        <Box sx={Card} className="border-box max-h-maxo h-full w-full">
            <Box className="flex w-full flex-row space-x-10">
                <Button className="" variant="contained">
                    + Add New User
                </Button>
            </Box>
            <Box></Box>
            <ProductPageTable></ProductPageTable>
        </Box>
    )
}

export default ProductPage
