import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Card } from './styles.js'
import Button from '../../Components/ui/Button/Button'
import { PopularProduct } from './HomePageComponents/PopularProducts.js'
import ProjectStatus from './HomePageComponents/ProjectStatus.js'
import EarningsReport from './HomePageComponents/EarningsReport.js'
import RecentOrders from './HomePageComponents/RecentOrders.js'
import ReportCards from './HomePageComponents/ReportCards.js'

function HomePage() {
    return (
        <Box className="box-border grid h-full max-h-max gap-7 db-xl:grid-rows-5">
            <Box className="row-span-1 grid gap-7 db-xs:grid-rows-6 db-md:grid-rows-2 db-lg:grid-rows-6 db-xl:row-span-2 db-xl:grid-cols-4 db-xl:grid-rows-1 db-xl:gap-y-0">
                <ReportCards></ReportCards>
                <Box
                    sx={Card}
                    className="max-h-[296px] db-xs:col-span-4 db-xs:row-span-2 db-md:col-span-4 db-lg:col-span-4 db-lg:row-span-4 db-xl:col-span-2 db-xl:row-span-1"
                >
                    <Box className="text-sm font-bold text-gray-700"> Earnings Report</Box>
                    <EarningsReport></EarningsReport>
                </Box>
            </Box>
            <Box className="min-h-6 max-h-auto row-span-1 grid grid-cols-5 gap-7 db-xl:row-span-3 db-xl:grid-cols-3">
                <Box sx={Card} className="p-7 db-xs:col-span-5 db-md:col-span-5 db-lg:col-span-3 db-xl:col-span-2">
                    <PopularProduct />
                </Box>
                <Box sx={Card} className=" p-7 db-xs:col-span-5 db-md:col-span-5 db-lg:col-span-2 db-xl:col-span-1">
                    <ProjectStatus />
                </Box>
            </Box>
            <Box className="min-h-6 max-h-auto row-span-1 grid grid-cols-5 gap-7 db-xl:row-span-3 db-xl:grid-cols-3">
                <Box sx={Card} className="p-7 db-xs:col-span-5 db-md:col-span-5 db-lg:col-span-3 db-xl:col-span-2">
                    <PopularProduct />
                </Box>
                <Box sx={Card} className=" relative p-7 db-xs:col-span-5 db-md:col-span-5 db-lg:col-span-2 db-xl:col-span-1">
                    <Typography className="text-sm font-bold text-gray-700">Recent Orders</Typography>
                    <Box className="absolute right-0 top-6">
                        <Link to="/orders" className="no-underline">
                            <Button>View all</Button>
                        </Link>
                    </Box>
                    <RecentOrders></RecentOrders>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage
