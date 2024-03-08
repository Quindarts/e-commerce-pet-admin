import { Box, Typography } from '@mui/material'
import React from 'react'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Button from '../../../Components/ui/Button/Button'
import { ROLE } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'

const ROLE_DROP_vALUE = [
    {
        title: 'Admin',
        value: ROLE.ADMIN,
    },
    {
        title: 'User',
        value: ROLE.USER,
    },
    {
        title: 'Warehouse',
        value: ROLE.WAREHOUSE,
    },
]
function EditRole(props) {
    const { handleCloseEditRoleModal, id } = props
    return (
        <Box mx={2} mb={2} mt={1}>
            <Typography style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }} mb={20} variant="h7">
                Change role user
            </Typography>
            <Dropdown style={{ marginTop: '1rem' }} list={ROLE_DROP_vALUE} size="xl" />
            <Box mt={3} sx={{ display: 'flex', gap: 3 }}>
                <Button onClick={handleCloseEditRoleModal} sx={{ width: '50%' }} color="primary" variant="outline">
                    <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                    Cancel
                </Button>
                <Button type="submit" sx={{ width: '50%' }} color="green">
                    <Icon width={20} style={{ marginRight: 4 }} icon="dashicons:update-alt" />
                    Update Role
                </Button>
            </Box>
        </Box>
    )
}

export default EditRole
