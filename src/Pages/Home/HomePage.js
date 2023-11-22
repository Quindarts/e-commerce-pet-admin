import React from 'react'
import { Link } from 'react-router-dom'
import { APP_ROUTER } from '../../Utils/Constants'

function HomePage() {
    return (
        <div>
            HomePage
            <Link to={APP_ROUTER.COMPONENT}> Go to component</Link>
        </div>
    )
}

export default HomePage
