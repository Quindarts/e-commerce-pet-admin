import React from 'react'
import Button from '../../../Components/ui/Button/Button'
import { Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { Box } from '@mui/system'

function Active(props) {
    const { handleCloseActiveModal, id } = props
    return (
        <Box
            height={300}
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="0 15px"
        >
            <Box borderRadius="50%" padding={3} sx={{ background: 'rgb(255 251 235)' }}>
                <Icon
                    width={70}
                    height={70}
                    color="rgb(245 158 11)"
                    icon="fluent-emoji-high-contrast:red-question-mark"
                />
            </Box>
            <Typography fontWeight="bold" marginTop={2}>
                Are you surce to change active this user ?
            </Typography>
            <Box width="100%" display="flex" gap={3} marginTop={5}>
                <Button onClick={handleCloseActiveModal} sx={{ width: '50%' }} color="primary" variant="outline">
                    <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                    Cancel
                </Button>
                <Button type="submit" sx={{ width: '50%' }} color="yellow">
                    <Icon width={20} style={{ marginRight: 4 }} icon="bx:save" />
                    Change this active
                </Button>
            </Box>
        </Box>
    )
}

export default Active
