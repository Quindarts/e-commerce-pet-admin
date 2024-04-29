import { Box } from '@mui/material'
import React from 'react'
import TableInvoice from './Table'

function InvoiceTab(props) {
    const { children, value, order_details, index, ...other } = props
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                invoice
                {order_details?.shipping_detail?.fullName}
                <TableInvoice />
            </Box>
        </Box>
    )
}

export default InvoiceTab
