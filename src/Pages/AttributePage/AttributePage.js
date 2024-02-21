import React, { useState } from 'react'
import Table from '../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../Components/ui/Button/Button'
import { APP_ICON } from '../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'
import Modal from '../../Components/ui/Modal/Modal'
import { useEffect } from 'react'
import SearchBar from '../../Components/ui/Search/SearchBar'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../Utils/Constants'
import AttributeList from './List'
import {CircularProgress} from '@mui/material'

export const AttributePage = () => {
    const navigate = useNavigate()

    const [value, setValue] = React.useState(2)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isActiveModalOpen, setIsActiveModalOpen] = useState(false)

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true)
    }

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false)
    }

    const handleOpenActiveModal = () => {
        setIsActiveModalOpen(true)
    }

    const handleCloseActiveModal = () => {
        setIsActiveModalOpen(false)
    }
    const [attributes, setAttributes] = useState([])
    const [loading, setLoading] = useState(false)
    const [isFetch, setIsFetch] = useState(false);
    return (
        <>
            <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
                <Box className="mb-5 flex w-full flex-wrap justify-between ">
                    <SearchBar placeholder="Search..." className="your-custom-class" />
                    <Button
                        onClick={() => navigate(APP_ROUTER.ATTRIBUTE_ADD)}
                        size="sm"
                        color="primary"
                        className="mt-1 px-7 py-2 font-semibold db-xs:mb-0 db-xs:w-full db-md:mb-4 db-md:w-auto"
                    >
                        New Attribute
                    </Button>
                </Box>
                {isFetch ? (
                    <Box>
                        <CircularProgress></CircularProgress>
                    </Box>
                ) : (
                    <AttributeList></AttributeList>
                )}
            </Box>
            <Modal maxWidth="lg" onClose={handleCloseEditModal} open={isEditModalOpen}>
                <h1>Hello from the Edit Modal</h1>
                <p>This is some content inside the Edit Modal.</p>
            </Modal>

            <Modal maxWidth="sm" onClose={handleCloseActiveModal} open={isActiveModalOpen}>
                <Box className="flex flex-col items-center justify-center">
                    <Icon width="180" icon={APP_ICON.i_warning} />
                    <Typography>Are you sure you want to unactive this attribute?</Typography>
                    <Box className="flex justify-center">
                        <Button>Yes</Button>
                        <Button>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
export default AttributePage
