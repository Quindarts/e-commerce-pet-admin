import React, { useState, useEffect } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'

import SearchBar from '../../../Components/ui/Search/SearchBar'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'

export const AttributeList = () => {
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

    useEffect(() => {
        const fetchAttributes = async () => {
            setLoading(true)
            try {
                const response = await fetch(
                    'https://e-commerce-pet-server-quindarts.vercel.app/attributeProducts?limit=10&offset=1',
                )
                const json = await response.json()
                setAttributes(json.list.map((attribute) => ({ ...attribute, id: attribute._id })))
            } catch (error) {
                console.error('Failed to fetch attributes:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchAttributes()
    }, [])

   
 

    const columns = [
        {
            field: 'detail',
            headerName: 'Product',
            flex: 1.3,
           
          
            renderCell: (params) => (
                <Box className="flex">
                    <Box>
                        <Typography>{params.row.name}</Typography>
                    </Box>
                </Box>
            ),
        },

        {
            field: 'stock',
            headerName: 'Stock',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
           
        },
    
        {
            field: 'code',
            headerName: 'SKU',
            flex: 1.2,
            headerAlign: 'center',
            align: 'center',
          
        },
    
        {
            field: 'status',
            headerName: 'Status',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,
           
            renderCell: (params) => <Box className="font-500">{params.row.status}</Box>,
        },
    
        {
            field: 'value',
            headerName: 'Value',
            flex: 1.2,
            headerAlign: 'center',
            align: 'center',
           
        },
    
        {
            field: 'active',
            headerName: 'Active',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
          
            renderCell: (params) => (
                <Box className="font-500">
                    {params.row.active ? (
                        <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>
                    ) : (
                        <BadgeWrapper badgeContent={'Inactive'} shape="square" type="red"></BadgeWrapper>
                    )}
                </Box>
            ),
        },
        {
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <Box className="font-500">{params.row.edit}</Box>,
        },
    ]
    return (
        <>
            <Table
                className="h-auto w-full"
                pageSize={6}
                hasCheckbox
                hasPanigation
                columns={columns}
                rows={attributes.map((attribute) => ({
                    id: attribute.id,
                    name: attribute.name,

                    code: attribute.code,
                    value: attribute.value,
                    stock: attribute.avaiable,

                    active: attribute.isActive,
                    status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
                
                    edit: (
                        <Stack direction="row">
                            <Button
                                onClick={handleOpenEditModal}
                                className=""
                                size="md"
                                variant="outline"
                                color="grey"
                                icon
                            >
                                <Icon icon={APP_ICON.i_pen} />
                            </Button>
                        </Stack>
                    ),
                }))}
            />
        </>
    )
}
export default AttributeList
