import React from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'

const rows = [
    {
        id: '1',

        stock: '48',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Nike Air Max 270',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Nike Official',
        },
        price: 450,
        category: 'Shoe',
        edit: (
            <Stack direction="row">
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_trash} />
                </Button>
            </Stack>
        ),
    },
    {
        id: '2',

        stock: '48',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Nike Air Max 270',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Nike Official',
        },
        price: 450,
        category: 'Shoe',
        edit: (
            <Stack className="" direction="row">
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_trash} />
                </Button>
            </Stack>
        ),
    },
    {
        id: '3',

        stock: '48',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Nike Air Max 270',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Nike Official',
        },
        price: 450,
        category: 'Shoe',
        edit: (
            <Stack direction="row">
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_trash} />
                </Button>
            </Stack>
        ),
    },
    {
        id: '4',

        stock: '48',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Nike Air Max 270',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Nike Official',
        },
        price: 450,
        category: 'Shoe',
        edit: (
            <Stack direction="row">
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_trash} />
                </Button>
            </Stack>
        ),
    },
    {
        id: '5',

        stock: '48',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Nike Air Max 270',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Nike Official',
        },
        price: 450,
        category: 'Shoe',
        edit: (
            <Stack direction="row">
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_trash} />
                </Button>
            </Stack>
        ),
    },
    {
        id: '6',

        stock: '48',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Nike Air Max 270',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Nike Official',
        },
        price: 450,
        category: 'Shoe',
        edit: (
            <Stack direction="row">
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_trash} />
                </Button>
            </Stack>
        ),
    },
]
const columns = [
    {
        field: 'detail',
        headerName: 'Product',
        flex: 2,
        renderCell: (params) => (
            <Box className="flex gap-3">
                <img className="h-[50px] w-[50px]" src={params.formattedValue.img} alt="" />
                <Box>
                    <Typography className="text-[14px] font-bold text-gray-600">
                        {params.formattedValue.name}
                    </Typography>
                    <Typography variant="h10" className="font-500 text-gray-[#5f748d]">
                        {params.formattedValue.desc}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    {
        field: 'category',
        headerName: 'Category',
        flex: 1,

        renderCell: (params) => (
            <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
        ),
    },
    {
        field: 'stock',
        headerName: 'Stock',
        flex: 1,
    },

    {
        field: 'code',
        headerName: 'SKU',
        flex: 1,
    },

    {
        field: 'price',
        headerName: 'Price',
        flex: 1,
    },
    {
        field: 'edit',
        headerName: 'Edit',
        flex: 1,
        renderCell: (params) => <Box className="font-500 py-1">{params.row.edit}</Box>,
    },
]
export const ProductManagerTable = () => {
    return <Table className="h-auto w-full" pageSize={6} hasCheckbox hasPanigation columns={columns} rows={rows} />
}
