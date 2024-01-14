import { useLayoutEffect, useState } from 'react'
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
        <Box className=" main_layout flex bg-[#f3f4f9] " sx={{ maxWidth: '100vw', width: '100%' }}>
            <Navbar className="bg-[white]" openNav={openNav} handleOpenNav={handleOpenNav} />
            <Box
                className={`main_outlet px-[3rem] py-[1rem]`}
                sx={{ minWidth: `${openNav ? 'calc(100% - 16rem)' : 'calc(100% - 5rem)'}` }}
            >
                <Header className="top-0" />
                <main>
                    <Outlet />
                </main>
                <footer>footer</footer>
            </Box>
        </Box>
    )
}

export default MainLayout
