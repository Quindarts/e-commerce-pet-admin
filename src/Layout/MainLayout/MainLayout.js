import { Fragment, useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import { Box } from '@mui/material'
import Header from '../../Components/Shared/Header/Header'

function MainLayout() {
    const [openNav, setOpenNav] = useState(true)
    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    return (
        <Fragment>
            <Box className="main_layout flex bg-[#f3f4f9] " sx={{ maxWidth: '100vw', width: '100%' }}>
                <Navbar className="bg-[white]" openNav={openNav} handleOpenNav={handleOpenNav} />
                <Box
                    className={`main_outlet px-[3rem] `}
                    sx={{ maxWidth: `${openNav ? 'calc(100% - 20rem)' : 'calc(100% - 5rem)'}` }}
                >
                    <main>
                        <Header />
                        <Outlet />
                    </main>
                    <footer>footer</footer>
                </Box>
            </Box>
        </Fragment>
    )
}

export default MainLayout
