import React from 'react'
import Modal from '../../../Components/ui/Modal/Modal'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import { Typography } from '@mui/material'

const ActiveModal = ({ isActiveModalOpen, handleCloseActiveModal }) => {
    return (
        <Modal maxWidth="sm" onClose={handleCloseActiveModal} open={isActiveModalOpen}>
        <Box className="flex flex-col items-center justify-center">
            <Icon width="180" icon={APP_ICON.i_warning} />
            <Typography>Are you sure you want to unactive this product?</Typography>
            <Box className="flex justify-center">
                <Button>Yes</Button>
                <Button>Cancel</Button>
            </Box>
        </Box>
    </Modal>
    )
}

export default ActiveModal
