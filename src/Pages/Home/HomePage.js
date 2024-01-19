import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_ICON, APP_ROUTER } from '../../Utils/Constants'
import { Grid, Box, useTheme, useMediaQuery, Typography } from '@mui/material'
import { Card } from './styles.js'
import { BarChart } from '@mui/x-charts'
import { useDrawingArea } from '@mui/x-charts/hooks'
import { styled } from '@mui/material/styles'
import Table from '../../Components/ui/Table/Table'
import Button from '../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'
import { BadgeWrapper } from '../../Components/ui/Badge/Badge'
import Chart from 'react-apexcharts'
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
    const revenues = [
        {
            title: 'Revenue',
            amount: '$35,800',
            growth: '+10.23%',
            type: 'positive',
        },
        {
            title: 'Repeat Purchase',
            amount: '$12,900',
            growth: '+20.4%',
            type: 'positive',
        },
        {
            title: 'Average Order value',
            amount: '$1,000',
            growth: '-10.23%',
            type: 'negative',
        },
        {
            title: 'New Customers',
            amount: '143',
            growth: '-10.23%',
            type: 'negative',
        },
    ]

    const orders = [
        {
            id: '1',
            product: 'Nike Air',
            time: '10 min ago',
            price: '$654',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
        },
        {
            id: '2',
            product: 'Cactus Plant',
            time: '10 min ago',
            price: '$654',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
        },
        {
            id: '3',
            product: 'Minimal Pot',
            time: '10 min ago',
            price: '$654',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
        },
        {
            id: '4',
            product: 'Adidas Blaze',
            time: '10 min ago',
            price: '$654',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
        },
    ]

    const data = [50, 30, 20, 40]
    const labels = ['Transactions', 'Payouts', 'Sales', 'Reports']
    const colors = ['#2499EF', '#8C8DFF', '#FFC675', '#8CA3BA']

    const options = {
        tooltip: {
            enabled: true,
            fillSeriesColor: true,
        },
        responsive: [
            {
                breakpoint: 440,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
            {
                breakpoint: 500,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },

            {
                breakpoint: 600,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
            {
                breakpoint: 900,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },

            {
                breakpoint: 1200,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
            {
                breakpoint: 1367,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
            {
                breakpoint: 1536,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
            {
                breakpoint: 1921,
                options: {
                    chart: {
                        width: 400,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
        chart: {
            type: 'donut',
        },
        labels: labels,
        colors: colors,
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '65%',
                },
            },
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false,
        },
    }

    const DonutChart = () => {
        return (
            <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div>Project Status</div>
                <div className="mt-4">
                    <Chart options={options} series={data} type="donut" className="mx-auto" />
                </div>
                <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <div className="xs:text-md mb-2 font-bold md:text-lg">Avg Range</div>
                    <div className="ml-3 font-bold xs:text-3xl md:text-4xl">140</div>
                </div>
            </div>
        )
    }

    return (
        <Box className="box-border grid h-full max-h-max gap-7 xl:grid-rows-5">
            <Box className="row-span-1 grid gap-7 xs:grid-rows-6 md:grid-rows-2 lg:grid-rows-6 xl:row-span-2 xl:grid-cols-4 xl:grid-rows-1 xl:gap-y-0">
                <Box className="grid gap-7 xs:col-span-4 xs:row-span-4 md:col-span-4 md:grid-cols-2 md:grid-rows-2 lg:col-span-4 lg:row-span-2 lg:grid-cols-4 lg:grid-rows-1 xl:col-span-2 xl:grid-cols-2 xl:grid-rows-2">
                    {revenues.map((revenue, index) => (
                        <Box
                            key={index}
                            className="max-h-[134px] min-w-[178px] p-7 xs:col-span-4 xs:row-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1"
                            sx={{ ...Card, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <Box className="mb-2 text-xs text-gray-600">{revenue.title}</Box>
                            <Box className="my-1 text-2xl font-bold">{revenue.amount}</Box>
                            <Box className="mt-3 flex items-center text-sm font-bold">
                                {revenue.type === 'positive' && (
                                    <Box className="rounded-full bg-green-100 p-1">
                                        <Icon icon={APP_ICON.i_arrow_up} color="green" />
                                    </Box>
                                )}
                                {revenue.type === 'negative' && (
                                    <Box className="rounded-full bg-red-100 p-1">
                                        <Icon icon={APP_ICON.i_arrow_down} color="red" />
                                    </Box>
                                )}
                                <span className={revenue.type === 'positive' ? 'text-green-400' : 'text-red-400'}>
                                    {revenue.growth}
                                </span>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={Card}
                    className="max-h-[288px] p-7 xs:col-span-4 xs:row-span-2 md:col-span-4 lg:col-span-4 lg:row-span-4 xl:col-span-2 xl:row-span-1"
                >
                    <BarChart
                        sx={{
                            '& .MuiChartsAxis-root > .MuiChartsAxis-line': {
                                stroke: 'none',
                            },
                            ' & .MuiChartsAxis-tickContainer > .MuiChartsAxis-tick': {
                                stroke: 'none',
                            },
                        }}
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
                                categoryGapRatio: 0.7,
                                barGapRatio: 7,
                            },
                        ]}
                        height={288}
                        series={[
                            {
                                data: [15000, 4500, 12000, 5000, 7500, 13000, 3000, 12000, 7500, 10000, 5500, 15000],
                                color: '#2499EF',
                                show: false,
                            },
                        ]}
                        options={{
                            plotOptions: {
                                bar: {
                                    borderRadiusTopLeft: 10,
                                    borderRadiusTopRight: 10,
                                },
                            },
                            xaxis: {
                                stroke: 'blue',
                            },
                            yaxis: {
                                show: false,
                            },
                        }}
                    />
                </Box>
            </Box>
            <Box className="min-h-6 max-h-auto row-span-1 grid grid-cols-5 gap-7 xl:row-span-3 xl:grid-cols-3">
                <Box sx={Card} className="p-7 xs:col-span-5 md:col-span-5 lg:col-span-3 xl:col-span-2">
                    <Table label="Popular Products" className="h-80 w-auto" columns={columns} rows={rows} />
                </Box>
                <Box sx={Card} className=" p-7 xs:col-span-5 md:col-span-5 lg:col-span-2 xl:col-span-1">
                    <DonutChart />
                </Box>
            </Box>
            <Box className="min-h-6 max-h-auto row-span-1 grid grid-cols-5 gap-7 xl:row-span-3 xl:grid-cols-3">
                <Box sx={Card} className="p-7 xs:col-span-5 md:col-span-5 lg:col-span-3 xl:col-span-2">
                    <Table label="Popular Products" className="h-80 w-auto" columns={columns} rows={rows} />
                </Box>
                <Box sx={Card} className=" relative p-7 xs:col-span-5 md:col-span-5 lg:col-span-2 xl:col-span-1">
                    <Typography variant="h6">Recent Orders</Typography>
                    <Box className="absolute right-0 top-8">
                        <Link to="/orders" style={{ textDecoration: 'none' }}>
                            <Button>View all</Button>
                        </Link>
                    </Box>
                    <Grid className="mt-5" container direction="column" spacing={2}>
                        {orders.map((order, index) => (
                            <Grid item key={index}>
                                <Box className="grid gap-2 xs:grid-cols-4 sm:grid-cols-4 sm:text-xs md:grid-cols-10 lg:grid-cols-5 xl:grid-cols-5">
                                    <Box className="col-span-1 row-span-2">
                                        <img
                                            src={order.img}
                                            alt={order.product}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    </Box>
                                    <Box className="xs:col-span-2 sm:col-span-2 sm:text-xs md:col-span-8 lg:col-span-3 xl:col-span-3">
                                        <Typography variant="body1">{order.product}</Typography>
                                        <Typography variant="caption">{order.time}</Typography>
                                    </Box>
                                    <Box className="col-span-1">
                                        <Typography variant="body1">{order.price}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage
