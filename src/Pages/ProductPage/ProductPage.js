import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../../Components/ui/Button/Button'
import { ProductPageTable } from './ProductPageComponents/ProductsPageTable'
import { Card } from './styles'
import SearchBar from '../../Components/ui/Search/SearchBar'
const ProductPage = () => {
    const [query, setQuery] = useState('')
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
            <Box className="mb-5 flex w-full flex-wrap justify-between ">
                <SearchBar className="mb-4" handleQuery={handleQuery} placeholder="Find Products" />

                <Button
                    size="sm"
                    color="primary"
                    className="px-7 py-1 font-semibold db-xs:mb-0 db-xs:w-full db-md:mb-4 db-md:w-auto"
                >
                    Add Products +
                </Button>
            </Box>
            <Box></Box>
            <ProductPageTable></ProductPageTable>
        </Box>
    )
}

export default ProductPage
