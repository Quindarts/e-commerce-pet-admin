import { Fragment, useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../../Components/Shared/Header/Header'
import TemporaryDrawer from '../../Components/Shared/Drawer/Drawer'

function MainLayout() {
    const [openNav, setOpenNav] = useState(false)
    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    return (
        <Fragment>
            <Box className="main_layout flex bg-[#f3f4f9] " sx={{ maxWidth: '100vw', width: '100%' }}>
                <TemporaryDrawer className="hello" openNav={openNav} handleOpenNav={handleOpenNav} />
                <Box
                    className={`main_outlet px-[2rem] `}
                    sx={{
                        maxWidth: `${openNav ? 'calc(100% - 20rem)' : 'calc(100% - 5rem)'}`,
                        // marginLeft: `${openNav ? ' 20rem' : '5rem'}`,
                    }}
                >
                    <main>
                        <Header />
                        <Outlet />
                    </main>
                </Box>
            </Box>
        </Fragment>
    )
}

export default MainLayout
