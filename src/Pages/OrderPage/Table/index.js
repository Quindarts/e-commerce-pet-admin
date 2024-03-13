import React, { useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'

const OrderPageTable = (props) => {
    const { handleChangePanigation, page, rows, totalPage, products } = props
    const [value, setValue] = React.useState(2)
    const [openOrder, setOpenOrder] = useState({ isOpen: false, order_id_id: '' })
    const handleOpenEditModal = (id) => {
        setOpenOrder({ isOpen: true, order_id: id })
    }
    const handleCloseEditModal = () => {
        setOpenOrder({ ...openOrder, isOpen: false })
    }
    const createProductObject = (product) => {
        if (!product || !product.id) {
            console.error('Product or product id is not defined:', product)
            return null
        }

        return {
            id: product.id,
            name: product.name,
            email: product.email,
            phone: product.phone,
            code: product.code,
            price: product.price,
            stock: product.avaiable,
            category: product.tags[0],
            active: product.isActive,
            description: product.description,
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
            rating: (
                <Rating
                    readOnly
                    name="simple-controlled"
                    value={value}
                    size="small"
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                />
            ),
            edit: (
                <Stack direction="row">
                    <Button
                        onClick={() => handleOpenEditModal(product.id)}
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
            imageUrl: product.images && product.images[0] ? product.images[0].url : defaultImageUrl,
        }
    }
    const columns = [
        {
            field: 'detail',
            headerName: 'Order Number',
            flex: 2,
            renderCell: (params) => (
                <Box className="flex gap-3">
                    <Typography className="text-[14px] font-bold text-gray-600">{params.row.name}</Typography>
                </Box>
            ),
        },
        {
            field: 'category',
            headerName: 'Customer',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

            renderCell: (params) => <Box className="text-[14px] text-gray-600">{params.formattedValue}</Box>,
        },
        {
            field: 'stock',
            headerName: 'Date',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'code',
            headerName: 'Total',
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
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <Box className="font-500">{params.row.edit}</Box>,
        },
    ]
    const defaultImageUrl = ''
    return (
        <>
            <Table
                className=" w-full"
                totalPage={totalPage}
                pageSize={6}
                currentPage={page}
                hasCheckbox
                hasPanigation
                columns={columns}
                rows={products.map(createProductObject)}
                handleChangePanigation={handleChangePanigation}
            />
        </>
    )
}

export default OrderPageTable
