import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_ICON, APP_ROUTER } from '../../Utils/Constants'
import { Grid, Box, useTheme, useMediaQuery, Typography } from '@mui/material'
import { Card } from './styles.js'
import { BarChart } from '@mui/x-charts'
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
        {
            id: '7',
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

    const theme = useTheme()
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(600))
    const isSmallScreen = useMediaQuery(theme.breakpoints.between(601, 900))
    const isMediumScreen = useMediaQuery(theme.breakpoints.between(901, 1200))
    const isLargeScreen = useMediaQuery(theme.breakpoints.up(1201))

    return (
        <Grid container>
            {isLargeScreen && (
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={3}>
                            {/* First column content goes here */}
                            <Grid container direction="column">
                                <Grid item xs={6}>
                                    <Box sx={Card}>
                                        {' '}
                                        <Box className="text-sm text-gray-500">Revenue</Box>
                                        <Box className="text-xl font-bold">$35,800</Box>
                                        <Box className="text-sm font-bold text-green-400">+10.23%</Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={Card}>Revenue $35,800 +10.23%</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            {/* Second column content goes here */}
                            <Grid container direction="column">
                                <Grid item xs={6}>
                                    <Box sx={Card}>Revenue $35,800 +10.23%</Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={Card}>Revenue $35,800 +10.23%</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
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
                                series={[
                                    {
                                        data: [
                                            15000, 4500, 12000, 5000, 7500, 13000, 3000, 12000, 7500, 10000, 5500,
                                            15000,
                                        ],
                                    },
                                ]}
                                width={500}
                                height={300}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={8}>
                <Table label="Popular Products" className=" w-full" columns={columns} rows={rows} />
            </Grid>
            <Grid item xs={4}>
                {/* Second row content goes here */}
            </Grid>
        </Grid>
    )
}

export default HomePage
