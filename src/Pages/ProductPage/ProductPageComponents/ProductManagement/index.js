import React, { useState } from 'react'
import { Box } from '@mui/material'
import Button from '../../../../Components/ui/Button/Button.js'
import { ProductManagerTable } from './ProductManagerTable/index.js'

import { APP_ROUTER } from '../../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'

const ProductManager = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
            <Box className="mb-5 flex w-full flex-wrap justify-between ">
                <Button
                    onClick={() => navigate(APP_ROUTER.ADD_PRODUCT)}
                    size="sm"
                    color="primary"
                    className="px-7 py-1 font-semibold db-xs:mb-0 db-xs:w-full db-md:mb-4 db-md:w-auto"
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
