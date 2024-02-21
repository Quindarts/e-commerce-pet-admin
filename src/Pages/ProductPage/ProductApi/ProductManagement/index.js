import React, { useState } from 'react'
import { Box } from '@mui/material'
import Button from '../../../../Components/ui/Button/Button.js'
import { ProductManagerTable } from '../../Table/index.js'
import SearchBar from '../../../../Components/ui/Search/SearchBar.js'
import { APP_ROUTER } from '../../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const ProductManager = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
            <Box className="mb-5 flex w-full flex-wrap justify-between ">
                <SearchBar
                    placeholder="Search..."
                    className="your-custom-class"
                    handleQuery={handleQuery}
                    query={query}
                />
                <Button
                    onClick={() => navigate(APP_ROUTER.ADD_PRODUCT)}
                    size="sm"
                    color="primary"
                    className="mt-1 px-7 py-2 font-semibold db-xs:mb-0 db-xs:w-full db-md:mb-4 db-md:w-auto"
                >
                    Add Products +
                </Button>
            </Box>
            <Box></Box>
            <ProductManagerTable></ProductManagerTable>
        </Box>
    )
}

export default ProductManager
