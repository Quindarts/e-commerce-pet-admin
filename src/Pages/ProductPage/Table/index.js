import React, { Fragment, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'

const TableProductList = (props) => {
    const { handleChangePanigation, page, rows, totalPage } = props
    console.log(rows)
    const [openActive, setOpenActive] = useState({ isOpen: false, category_id: '' })

    const handleOpenActiveModal = (id) => {
        setOpenActive({ isOpen: true, category_id: id })
    }
    const handleCloseActiveModal = () => {
        setOpenActive({ ...openActive, isOpen: false })
    }
    const [value, setValue] = React.useState(5)

    const columns = [
        {
            field: 'detail',
            headerName: 'Product',
            flex: 1.5,
            renderCell: (params) => (
                <Box className="group flex cursor-pointer gap-2 transition-colors">
                    <img className="h-[50px] w-[50px] object-cover" src={params.row.images[0].url} alt="" />
                    <Box>
                        <Typography className="text-[13px] font-[600] text-gray-600  group-hover:text-sky-600">
                            {params.row?.name}
                        </Typography>
                        <Typography className="text-[11px] font-[500] text-gray-500 group-hover:text-sky-600">
                            {params.row?.description}
                        </Typography>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'tags',
            headerName: 'Category',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'avaiable',
            headerName: 'Stock',
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'code',
            headerName: 'SKU',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'price',
            headerName: 'Price',
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'rating',
            headerName: 'Rating',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <Rating
                    readOnly
                    name="read-only"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                />
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Button
                    onClick={() => {
                        handleOpenActiveModal(params.id)
                    }}
                    className={`cursor-pointer rounded-[20px] ${
                        params.row.isActive
                            ? 'bg-emerald-100 px-3 py-1 text-green-600'
                            : 'bg-red-100 px-3 py-1 text-red-600'
                    }`}
                >
                    {params.row.isActive ? 'active' : 'unactive'}
                </Button>
            ),
        },
        {
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 0.7,
            renderCell: (params) => (
                <Box>
                    <Button size="lg" color="grey" variant="outline" icon>
                        <Icon icon={APP_ICON.i_eye_open} className="text-sky-500" />
                    </Button>
                    <Button size="lg" color="grey" variant="outline" icon>
                        <Icon icon="mdi:bin-outline" className="text-red-400" />
                    </Button>
                </Box>
            ),
        },
    ]
    const defaultImageUrl = ''
    return (
        <Fragment>
            <Box>
                <Table
                    hasPanigation
                    className="w-full"
                    columns={columns}
                    rows={rows}
                    totalPage={totalPage}
                    pageSize={6}
                    currentPage={page}
                    handleChangePanigation={handleChangePanigation}
                />
            </Box>
        </Fragment>
    )
}

export default TableProductList
