import { Box, Typography } from '@mui/material'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Button from '../../../Components/ui/Button/Button'
import { ROLE } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import client from '../../../services/api-context'
import { Fragment } from 'react'
import { CircularProgress } from '@mui/material'

function EditRole(props) {
    const { handleCloseEditRoleModal, id } = props
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const ROLE_DROP_VALUE = [
        {
            title: 'User',
            value: ROLE.USER,
        },
        {
            title: 'Warehouse',
            value: ROLE.WAREHOUSE,
        },
        {
            title: 'Owner',
            value: ROLE.OWNER,
        },
        {
            title: 'Admin',
            value: ROLE.ADMIN,
        },
    ]

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            try {
                const response = await client.get(`/users/${id}`)
                console.log(response)
                setUser(response.user)
            } catch (error) {
                console.error('Failed to fetch users:', error)
                if (error.response) {
                    console.error('Response data:', error.response.data)
                    console.error('Response status:', error.response.status)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])
    const [sortedRoles, setSortedRoles] = useState(ROLE_DROP_VALUE) 
    useEffect(() => {
        if (user && user.role) {
            console.log(user.role)
            const userRoleItem = ROLE_DROP_VALUE.find((item) => item.value === user.role)
            if (userRoleItem) {
                const otherRoles = ROLE_DROP_VALUE.filter((item) => item.value !== user.role)
                setSortedRoles([userRoleItem, ...otherRoles])
            }
        }
    }, [user])

    return (
        <Fragment>
            {user ? (
                <Box mx={2} mb={2} mt={1}>
                    <Typography
                        style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }}
                        mb={20}
                        variant="h7"
                    >
                        Change role user
                    </Typography>
                    <Dropdown
                        key={sortedRoles.map((role) => role.value).join(',')}
                        style={{ marginTop: '1rem' }}
                        sx={{
                            pointerEvents: sortedRoles[0]?.value === 'owner' ? 'none' : 'auto',
                        }}
                        list={sortedRoles}
                        size="xl"
                    />
                    <Box mt={3} sx={{ display: 'flex', gap: 3 }}>
                        <Button
                            onClick={handleCloseEditRoleModal}
                            sx={{ width: '50%' }}
                            color="primary"
                            variant="outline"
                        >
                            <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                            Cancel
                        </Button>
                        <Button type="submit" sx={{ width: '50%' }} color="green">
                            <Icon width={20} style={{ marginRight: 4 }} icon="dashicons:update-alt" />
                            Update Role
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={300}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default EditRole
