import React, { useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Icon, Typography } from '@mui/material'
import { APP_ICON } from '../../../Utils/Constants'
import Button from '../../../Components/ui/Button/Button'

function TableCategory(props) {
    const { handleChangePanigation, page, rows } = props
    const [open, setOpen] = useState(false)
    const handleOpen = (option) => {
        setOpen(true)
    }
    const columns = [
        {
            field: 'detail',
            headerName: 'Category name',
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
            field: 'code',
            headerName: 'Code',
            flex: 1,

            renderCell: (params) => (
                <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
            ),
        },
        {
            field: 'total',
            headerName: 'Total',
            flex: 1,
        },

        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button onClick={handleOpen} size="lg" color="grey" variant="outline" icon>
                        <Icon icon={APP_ICON.i_pen} />
                    </Button>
                </Box>
            ),
        },
    ]
    return (
        <div>
            {' '}
            <Table
                hasCheckbox
                hasPanigation
                label="Category table"
                className=" w-full"
                columns={columns}
                rows={rows}
                totalPage={3}
                pageSize={3}
                currentPage={page}
                handleChangePanigation={handleChangePanigation}
            />
        </div>
    )
}

export default TableCategory
