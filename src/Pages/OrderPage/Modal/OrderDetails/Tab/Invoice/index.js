import { Box, Icon } from '@mui/material'
import React from 'react'
import TableInvoice from './Table'
import Button from '../../../../../../Components/ui/Button/Button'
import Textfield from '../../../../../../Components/ui/Textfield/Textfield'

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
                invoice#
                {order_details?.code}
                <Box
                    // sx={Card}
                    className="mx-auto max-w-[580px] justify-center px-8 py-9"
                    mx={2}
                    mb={3}
                    mt={1}
                >
                    <Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                Bill to:
                            </Box>

                            <Box my={1} flex={1}>
                                Bill from:
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.fullName}
                            </Box>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.address?.detail}{' '}
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.address?.detail}
                            </Box>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.address?.district?.districtName}{' '}
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.address?.district?.districtName}
                                {order_details?.shipping_detail?.address?.ward?.wardName}
                                {order_details?.shipping_detail?.address?.province?.provinceName}
                            </Box>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.address?.ward?.wardName}
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                {/* Issue Date: {new Date(order_details?.dateCreated).toISOString().split('T')[0]} */}
                            </Box>
                            <Box my={1} flex={1}>
                                {order_details?.shipping_detail?.address?.province?.provinceName}
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                Status: {order_details?.status}
                            </Box>
                            <Box my={1} flex={1} sx={{ textAlign: 'right' }}>
                                {order_details?.dateCreated.address?.province?.provinceName}
                            </Box>
                        </Box>
                        {/* <Box mt={2} sx={{ display: 'flex', gap: 2 }}>
                            <Button sx={{ width: '50%' }} color="primary" variant="outline">
                                <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                                Cancel
                            </Button>
                            <Button type="submit" sx={{ width: '50%' }} color="primary">
                                <Icon width={20} style={{ marginRight: 4 }} icon="iconamoon:edit" />
                                Create User
                            </Button>
                        </Box> */}
                    </Box>
                </Box>
                <TableInvoice />
                <Box
                    // sx={Card}
                    className="mx-auto max-w-[580px] justify-center px-8 py-9"
                    mx={2}
                    mb={3}
                    mt={1}
                >
                    <Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="First Name" id="firstName" type="text" label="First Name" />
                            </Box>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="Last Name" id="lastName" type="text" label="Last Name" />
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="example@gmail.com" id="email" type="email" label="Email" />
                            </Box>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="location" id="location" type="location" label="Location" />
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="0123456789" id="phone" type="phone" label="Phone" />
                            </Box>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="City" id="city" type="city" label="City" />
                            </Box>
                        </Box>
                        <Box width="100%" display={'flex'} gap={2}>
                            <Box my={1} flex={1}>
                                <Textfield placeholder="MM/DD/YYYY" id="birthday" type="birthday" label="Birthday" />
                            </Box>
                            <Box my={1} flex={1}></Box>
                        </Box>
                        <Box mt={2} sx={{ display: 'flex', gap: 2 }}>
                            <Button sx={{ width: '50%' }} color="primary" variant="outline">
                                <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                                Cancel
                            </Button>
                            <Button type="submit" sx={{ width: '50%' }} color="primary">
                                <Icon width={20} style={{ marginRight: 4 }} icon="iconamoon:edit" />
                                Create User
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default InvoiceTab
