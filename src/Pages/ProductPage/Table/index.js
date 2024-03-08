import React from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'

const ProductManagerTable = ({ products, handleOpenEditModal }) => {
    const [value, setValue] = React.useState(2)
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
            headerName: 'Product',
            flex: 2,
            renderCell: (params) => (
                <Box className="flex gap-3">
                    <img className="h-[50px] w-[50px]" src={params.row.imageUrl} alt="" />
                    <Box>
                        <Typography className="text-[14px] font-bold text-gray-600">{params.row.name}</Typography>
                        <Typography variant="h10" className="font-500 text-gray-[#5f748d]">
                            {params.row.description}
                        </Typography>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'category',
            headerName: 'Category',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

            renderCell: (params) => <Box className="font-500 rounded-3xl bg-[#f6f6f8] ">{params.formattedValue}</Box>,
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
            field: 'price',
            headerName: 'Price',
            flex: 1.2,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'rating',
            headerName: 'Rating',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,
            renderCell: (params) => <Box className="font-500 ">{params.row.rating}</Box>,
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
    const defaultImageUrl = ''
    return (
        <>
            <Table
                className="h-auto w-full"
                pageSize={6}
                hasCheckbox
                hasPanigation
                columns={columns}
                rows={products.map(createProductObject)}
            />
        </>
    )
}

export default ProductManagerTable
