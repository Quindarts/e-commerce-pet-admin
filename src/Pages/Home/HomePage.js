import React from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTER } from '../../Utils/Constants'
import { Box } from '@mui/material'

function HomePage() {
    return (
        <Box>
            HomePage
            <Link to={APP_ROUTER.COMPONENT}> Go to component</Link>
        </Box>
    )
}

export default HomePage
