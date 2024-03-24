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
import { CircularProgress } from '@mui/material'

export const AttributePage = () => {
    const navigate = useNavigate()

    const [isFetch, setIsFetch] = useState(false)
    const [query, setQuery] = useState('')
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        <>
            <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
                <Box className="mb-5 flex w-full flex-wrap justify-between ">
                    <SearchBar handleQuery={handleQuery} query={query} className="" placeholder={`Search...`} />
                    <Button
                        onClick={() => navigate(APP_ROUTER.ATTRIBUTE_ADD)}
                        size="sm"
                        color="primary"
                        className="mt-1 px-7 py-2 font-semibold xs:mb-0 xs:w-full md:mb-4 md:w-auto"
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
        </>
    )
}
export default AttributePage
