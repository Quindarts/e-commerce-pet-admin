import React from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import Avatar from '../../../Components/ui/Avatar/Avatar'

function TableUserManager(props) {
    const { handleChangePanigation, currentPage = 1, className = '', rows, totalPage, hasPanigation } = props
    const columns = [
        {
            field: 'details',
            headerName: 'User detail',
            flex: 1.3,
            renderCell: (params) => (
                <Box className="flex gap-2">
                    <Box>
                        <Avatar
                            size="md"
                            src="https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo="
                        />
                    </Box>
                    <Box>
                        <Typography className="text-sm font-[700] text-slate-600">
                            {params.row.first_name} {params.row.last_name}
                        </Typography>
                        <button className="rounded-xl text-sm font-[500] text-orange-400">{params.row.role}</button>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1.3,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box className=" text-[14px] font-[500] text-slate-500">{params.row.email}</Box>,
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box className="text-sm font-[500] text-slate-500">{params.formattedValue}</Box>,
        },

        {
            field: 'dateOfBirth',
            headerName: 'Date',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },

        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Button
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
            field: 'action',
            headerName: 'Action',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button size="md" color="grey" variant="outline" icon>
                        <Icon icon="bytesize:user" className="text-purple-500" />
                    </Button>
                    <Button size="md" color="grey" variant="outline" icon>
                        <Icon icon={APP_ICON.i_pen} className="text-sky-500" />
                    </Button>
                    <Button size="md" color="grey" variant="outline" icon>
                        <Icon icon="mdi:bin-outline" className="text-red-400" />
                    </Button>
                </Box>
            ),
        },
    ]
    return (
        <Box>
            <Table
                className={`${className}`}
                page={currentPage}
                totalPage={totalPage}
                rows={rows}
                handleChangePanigation={handleChangePanigation}
                hasPanigation
                pageSize={6}
                columns={columns}
            />
        </Box>
    )
}

export default TableUserManager
