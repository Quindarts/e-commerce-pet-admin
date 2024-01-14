import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_ICON, APP_ROUTER } from '../../Utils/Constants'
import { Grid, Box, useTheme, useMediaQuery, Typography } from '@mui/material'
import { Card } from './styles.js'
import { BarChart, PieChart } from '@mui/x-charts'

import Table from '../../Components/ui/Table/Table'
import Button from '../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'
import { BadgeWrapper } from '../../Components/ui/Badge/Badge'

function HomePage() {
    const handleOpen = (option) => {
        setOpen(true)
    }
    const [open, setOpen] = useState(false)

    const rows = [
        {
            id: '1',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '2',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '3',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '4',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
        {
            id: '5',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
        {
            id: '6',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
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
            field: 'date',
            headerName: 'Date',
            flex: 1,
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
            field: 'brand',
            headerName: 'Brand',
            flex: 1,
        },

        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',

            flex: 1,
            renderCell: (params) => <Box className="font-500 px-7 py-1">{params.row.status}</Box>,
        },
    ]
    const data1 = [
        { label: 'Group A', value: 2400 },
        { label: 'Group B', value: 4567 },
        { label: 'Group C', value: 1398 },
        { label: 'Group D', value: 9800 },
        { label: 'Group E', value: 3908 },
        { label: 'Group F', value: 4800 },
    ]

    return (
        <Box className="grid grid-rows-3 gap-4">
            <Box className="grid gap-4 xs:grid-rows-6 sm:grid-rows-2 md:grid-rows-6 lg:grid-cols-4 lg:grid-rows-1 lg:gap-y-0">
                <Box className="grid gap-4 xs:col-span-4 xs:row-span-4 sm:col-span-4 sm:grid-cols-2 sm:grid-rows-2 md:col-span-4 md:row-span-2 md:grid-cols-4 md:grid-rows-1 lg:col-span-2 lg:grid-cols-2 lg:grid-rows-2">
                    <Box
                        className="p-4 xs:col-span-4 xs:row-span-1 sm:col-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"
                        sx={Card}
                    >
                        <Box className="text-sm text-gray-500">Revenue</Box>
                        <Box className="text-xl font-bold">$35,800</Box>
                        <Box className="text-sm font-bold text-green-400">+10.23%</Box>
                    </Box>
                    <Box
                        className="p-4 xs:col-span-4 xs:row-span-1 sm:col-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"
                        sx={Card}
                    >
                        <Box className="text-sm text-gray-500">Revenue</Box>
                        <Box className="text-xl font-bold">$35,800</Box>
                        <Box className="text-sm font-bold text-green-400">+10.23%</Box>
                    </Box>
                    <Box
                        className="p-4 xs:col-span-4 xs:row-span-1 sm:col-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"
                        sx={Card}
                    >
                        <Box className="text-sm text-gray-500">Revenue</Box>
                        <Box className="text-xl font-bold">$35,800</Box>
                        <Box className="text-sm font-bold text-green-400">+10.23%</Box>
                    </Box>
                    <Box
                        className="p-4 xs:col-span-4 xs:row-span-1 sm:col-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"
                        sx={Card}
                    >
                        <Box className="text-sm text-gray-500">Revenue</Box>
                        <Box className="text-xl font-bold">$35,800</Box>
                        <Box className="text-sm font-bold text-green-400">+10.23%</Box>
                    </Box>
                </Box>
                <Box
                    sx={Card}
                    className="p-4 xs:col-span-4 xs:row-span-2 sm:col-span-4 md:col-span-4 md:row-span-4 lg:col-span-2"
                >
                    <BarChart
                        xAxis={[
                            {
                                id: 'barCategories',
                                data: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec',
                                ],
                                scaleType: 'band',
                            },
                        ]}
                        height={300}
                        series={[
                            {
                                data: [15000, 4500, 12000, 5000, 7500, 13000, 3000, 12000, 7500, 10000, 5500, 15000],
                            },
                        ]}
                    />
                </Box>
            </Box>
            <Box className="grid grid-cols-3 gap-4">
                <Box sx={Card} className="p-4 xs:col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2">
                    <Table
                        hasPanigation
                        label="Popular Products"
                        className="h-80 w-auto"
                        columns={columns}
                        rows={rows}
                    />
                </Box>
                <Box sx={Card} className=" xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1">
                    <PieChart
                        series={[
                            {
                                data: data1,

                                innerRadius: 40,
                                outerRadius: 80,
                            },
                        ]}
                        width={200}
                        height={200}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </Box>
            </Box>
            <Box className="grid grid-cols-3 gap-4">
                <Box sx={Card} className="p-4 xs:col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2">
                    <Table
                        hasPanigation
                        label="Popular Products"
                        className="h-80 w-auto"
                        columns={columns}
                        rows={rows}
                    />
                </Box>
                <Box sx={Card} className=" p-4 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1">
                    Others
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage
