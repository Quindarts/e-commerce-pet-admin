import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import useUser from '../../hook/api/user'
import { useSelector } from 'react-redux'
import Avatar from '../../Components/ui/Avatar/Avatar'
import { BadgeWrapper } from '../../Components/ui/Badge/Badge'
import { Card } from './styles'
import userBackground from './../../assets/img/user-info-background.png'

function UserPage() {
    const { handleGetUserById } = useUser()
    const user = useSelector((state) => state.users)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleGetUserById('657fee4a8f8ba7c4e2ffebf4').finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Box className="relative flex flex-col items-center " sx={Card}>
            <Box className="-z-1 absolute left-0 top-0 h-[125px] w-full rounded">
                <img src={userBackground} alt="Background" className=" h-full w-full rounded-t-[10px] object-cover" />
            </Box>
            {user?.user_detail && (
                <Box className="mt-[55px] flex flex-col items-center p-[24px]">
                    <BadgeWrapper
                        variant="dot"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        shape="round"
                        type="dark_green"
                        border={true}
                        size="lg"
                    >
                        <Avatar src={user.user_detail.avatar?.url} size="lg" alt="User Avatar" border="false" />
                    </BadgeWrapper>
                    <Typography className="text-[16px] font-semibold">{`${user.user_detail.first_name} ${user.user_detail.last_name}`}</Typography>
                    <Box className="mx-auto  flex max-w-[340px] flex-row flex-wrap items-center justify-between space-x-4 pt-[8px]">
                        <Typography className="text-xs font-[500] text-[#5f748d]">
                            Email: {user.user_detail.email}
                        </Typography>
                        <Typography className="text-xs font-[500] text-[#5f748d]">
                            Role: {user.user_detail.role}
                        </Typography>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default UserPage
