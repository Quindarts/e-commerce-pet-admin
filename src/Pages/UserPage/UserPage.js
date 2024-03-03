import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import useUser from '../../hook/api/user'
import { useSelector } from 'react-redux'
import Avatar from '../../Components/ui/Avatar/Avatar'

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
        <Box display="flex" flexDirection="column" alignItems="center">
            {user?.user_detail && (
                <Box mt={3}>
                    <Avatar
                        src={user.user_detail.avatar?.url}
                        size="lg"
                        alt="User Avatar" 
                        badge={{ status: 'private', position: 'bottom-right' }}
                    />
                    <Typography variant="h4">{`${user.user_detail.first_name} ${user.user_detail.last_name}`}</Typography>
                    <Grid container justifyContent="center" mt={2}>
                        <Grid item xs={6}>
                            <Typography>Email: {user.user_detail.email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Role: {user.user_detail.role}</Typography>
                        </Grid>
                    </Grid>
                    {/* <Typography mt={2}>Active: {user.user_detail.isActive ? 'Yes' : 'No'}</Typography> */}
                </Box>
            )}
        </Box>
    )
}
export default UserPage
