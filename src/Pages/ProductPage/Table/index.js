import React, { useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'
import Modal from '../../../Components/ui/Modal/Modal'

export const ProductManagerTable = () => {
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
                    <Button onClick={handleOpenEditModal} className="" size="md" variant="outline" color="grey" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Stack>
            ),
            active: (
                <button onClick={handleOpenActiveModal} className="" size="sm" icon>
                    <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>,{' '}
                </button>
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
                <Stack className="" direction="row">
                    <Button onClick={handleOpenEditModal} className="" size="md" variant="outline" color="grey" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Stack>
            ),
            active: (
                <button onClick={handleOpenActiveModal} className="" size="sm" icon>
                    <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>,{' '}
                </button>
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
                    <Button onClick={handleOpenEditModal} className="" size="md" variant="outline" color="grey" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Stack>
            ),
            active: (
                <button onClick={handleOpenActiveModal} className="" size="sm" icon>
                    <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>,{' '}
                </button>
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
                    <Button onClick={handleOpenEditModal} className="" size="md" variant="outline" color="grey" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Stack>
            ),
            active: (
                <button onClick={handleOpenActiveModal} className="" size="sm" icon>
                    <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>,{' '}
                </button>
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
                    <Button onClick={handleOpenEditModal} className="" size="md" variant="outline" color="grey" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Stack>
            ),
            active: (
                <button onClick={handleOpenActiveModal} className="" size="sm" icon>
                    <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>,{' '}
                </button>
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
                    <Button onClick={handleOpenEditModal} className="" size="md" variant="outline" color="grey" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Stack>
            ),
            active: (
                <button onClick={handleOpenActiveModal} className="" size="sm" icon>
                    <BadgeWrapper badgeContent={'Active'} shape="square" type="green"></BadgeWrapper>,{' '}
                </button>
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
            renderCell: (params) => <Box className=" font-500">{params.row.active}</Box>,
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
            <Table className="h-auto w-full" pageSize={6} hasCheckbox hasPanigation columns={columns} rows={rows} />

            <Modal maxWidth="lg" onClose={handleCloseEditModal} open={isEditModalOpen}>
                <h1>Hello from the Edit Modal</h1>
                <p>This is some content inside the Edit Modal.</p>
            </Modal>

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
        </>
    )
}
