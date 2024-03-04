import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../../Components/Shared/Header/Header'
import TemporaryDrawer from '../../Components/Shared/Drawer/Drawer'
import useUser from '../../hook/api/user'

function MainLayout() {
    const [openNav, setOpenNav] = useState(false)
    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    const { handleGetUserById } = useUser()
    useEffect(() => {
        handleGetUserById('657fee4a8f8ba7c4e2ffebf4')
    }, [])
    return (
        
        <Fragment>
            <Box className="main_layout flex bg-[#f3f4f9] " sx={{ maxWidth: '100vw', width: '100%' }}>
                <TemporaryDrawer className="hello" openNav={openNav} handleOpenNav={handleOpenNav} />
                <Box
                    className={`main_outlet px-[2rem] `}
                    sx={{
                        width: '100%',
                        minHeight: '100vh',
                        maxWidth: `${openNav ? 'calc(100% - 280px)' : 'calc(100% - 86px)'}`,
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
