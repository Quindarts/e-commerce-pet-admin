import React from 'react'
import Button from '../../Components/ui/Button/Button'
import { Box } from '@mui/material'

function ProductPage() {
    return (
        <Box>
            ProductPage
            <Button variant="primary" onClick={() => window.localStorage.removeItem('user')}>
                Log out demo
            </Button>
        </Box>
    )
}

export default ProductPage
