import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { Box, Typography } from '@mui/material'

function ChartBar(props) {
    const numMonth = 13
    const { numCategory, series } = props
    return (
        <Box className="w-full">
            <Typography variant="body1" color="initial" className="font-bold text-blue-900">
                Monthly revenue statistics
            </Typography>
            <BarChart
                height={500}
                series={series.slice(0, numCategory).map((s) => ({ ...s, data: s.data.slice(0, numMonth) }))}
            />
        </Box>
    )
}

export default ChartBar
