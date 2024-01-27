import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../../Components/Shared/Header/Header'
import TemporaryDrawer from '../../Components/Shared/Drawer/Drawer'
import Progress from '../../Components/ui/Progress/Progress'
import useUser from '../../hook/api/user'
import useApp from '../../hook/api/app'

function MainLayout() {
    const [openNav, setOpenNav] = useState(false)
    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    const { handleGetUserById } = useUser()
    const { app } = useApp()
    useEffect(() => {
        handleGetUserById('657fee4a8f8ba7c4e2ffebf4')
    }, [])
    return (
        <Fragment>
            {<Progress /> && app.isLoading}
            <Box className="main_layout flex bg-[#f3f4f9] " sx={{ maxWidth: '100vw', width: '100%' }}>
                <TemporaryDrawer className="hello" openNav={openNav} handleOpenNav={handleOpenNav} />
                <Box
                    className={`main_outlet px-[2rem] `}
                    sx={{
                        width: '100%',
                        minHeight: '100vh',
                        maxWidth: `${openNav ? 'calc(100% - 20rem)' : 'calc(100% - 8.6rem)'}`,
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
