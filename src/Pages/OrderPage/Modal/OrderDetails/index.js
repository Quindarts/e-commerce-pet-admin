import React, { useEffect, useState } from 'react'
import { apiGetOrderById } from '../../../../services/api-order'
import TabOrder from './Tab'
import { Box } from '@mui/material'

function OrderDetails({ handleOpenOrderDetails, handleCloseOrderDetails, order_id }) {
    const [data, setData] = useState()
    useEffect(() => {
        apiGetOrderById(order_id).then((res) => {
            setData(res.order)
            console.log(res)
        })
    }, [])

    return (
        <Box>
            <TabOrder order_details={data} />
        </Box>
    )
}

export default OrderDetails
