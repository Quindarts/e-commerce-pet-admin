import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatar from '../../../../../../Components/ui/Avatar/Avatar'


function DetailOrderTab(props) {
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
                <Box display={'flex'} my={2} alignItems={'center'} gap={1}>
                    <Typography fontWeight="bold" fontSize={20}>
                        Order Info
                    </Typography>
                    <Typography fontSize={16} fontWeight="bold" color={'gray'}>
                        # {order_details?.code}
                    </Typography>
                </Box>
                <Box width={'100%'} sx={{ display: 'flex' }}>
                    <Box width={'33.3%'}>
                        <Typography mb={2} fontSize={14} fontWeight="bold">
                            Order From
                        </Typography>
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            {order_details?.shipping_detail?.fullName}
                        </Typography>
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            {order_details?.shipping_detail?.address?.country}
                        </Typography>{' '}
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            + {order_details?.shipping_detail?.phone}
                        </Typography>
                        <Box display="flex" mt={2} alignItems={'center'} gap={2}>
                            <Avatar />
                            <Box>
                                <Typography fontSize={14} fontWeight="600">
                                    Order From
                                </Typography>{' '}
                                <Typography fontSize={12} color="gray">
                                    Order From
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={'33.3%'}>
                        <Typography mb={2} fontSize={14} fontWeight="bold">
                            Payment Method
                        </Typography>
                        <Typography fontSize={14} fontWeight="500">
                            VNPAY
                        </Typography>{' '}
                        <Typography fontSize={14} fontWeight="500">
                            Total Order : {order_details?.totalOrderItem}
                        </Typography>{' '}
                        <Typography fontSize={14} fontWeight="500">
                            Status: {order_details?.status}
                        </Typography>
                    </Box>
                    <Box width={'33.3%'}>
                        <Typography mb={2} fontSize={14} fontWeight="bold">
                            Billing Address
                        </Typography>
                        <Typography fontSize={14} fontWeight="500">
                            ZipCode : {'   '} {order_details?.shipping_detail?.address?.zipCode},
                        </Typography>{' '}
                        <Typography fontSize={14} fontWeight="500">
                            Detail: {order_details?.shipping_detail?.address?.detail},
                        </Typography>{' '}
                        <Typography fontSize={14} fontWeight="500">
                            Country:{'   '} {order_details?.shipping_detail?.address?.country}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailOrderTab
