import React from 'react'
import { Box } from '@mui/material'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Card } from '../styles'
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

const ReportCards = ({ revenue }) => {
    return (
        <Box className="grid gap-7 xs:col-span-4 xs:row-span-4 md:col-span-4 md:grid-cols-2 md:grid-rows-2 lg:col-span-4 lg:row-span-2 lg:grid-cols-4 lg:grid-rows-1 xl:col-span-2 xl:grid-cols-2 xl:grid-rows-2">
            {revenues.map((revenue, index) => (
                <Box
                    key={index}
                    className="max-h-[134px] min-w-[178px] p-7 xs:col-span-4 xs:row-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1"
                    sx={{ ...Card, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <Box className="mb-2 text-sm  text-gray-500">{revenue.title}</Box>
                    <Box className="my-1 text-2xl font-bold text-gray-700">{revenue.amount}</Box>
                    <Box className="mt-3 flex items-center text-sm font-bold">
                        {revenue.type === 'positive' && (
                            <Box className="mr-1 rounded-full bg-green-100 p-1">
                                <Icon icon={APP_ICON.i_arrow_up} color="green" />
                            </Box>
                        )}
                        {revenue.type === 'negative' && (
                            <Box className="mr-1 rounded-full bg-red-100 p-1">
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
    )
}

export default ReportCards
