import React, { useEffect, useState } from 'react'
import useUser from '../../../../hook/api/user'
import { Box } from '@mui/system'
import { Card } from './style'
import { BadgeWrapper } from '../../../ui/Badge/Badge'
import Avatar from '../../../ui/Avatar/Avatar'
import Background from '../../../../assets/img/user-info-background.png'
import { CircularProgress, Typography } from '@mui/material'
function Profile() {
    const { user, handleGetUserById } = useUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        handleGetUserById('657fee4a8f8ba7c4e2ffebf4').finally(() => setLoading(false))
        setLoading(false)
    }, [])

    return (
        <Box className="relative flex flex-col items-center " sx={Card}>
            <Box className="-z-1 absolute left-0 top-0 h-[125px] w-full rounded"></Box>
            {!loading && user.user_detail ? (
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
                    <Typography className="text-[16px] font-semibold">
                        {`${user.user_detail.first_name} ${user.user_detail.last_name}`}
                    </Typography>
                    <Box className="mx-auto  flex max-w-[340px] flex-row flex-wrap items-center justify-between space-x-4 pt-[8px]">
                        <Typography className="text-xs font-[500] text-[#5f748d]">
                            Email: {user.user_detail.email}
                        </Typography>
                        <Typography className="text-xs font-[500] text-[#5f748d]">
                            Role: {user.user_detail.role}
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <CircularProgress />
            )}
        </Box>
    )
}

export default Profile
