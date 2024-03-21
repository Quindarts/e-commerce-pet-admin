import React, { useState } from 'react'
import Modal from '../../../Components/ui/Modal/Modal'
import Tabs from '../../../Components/ui/Tabs/Tabs'
import { Typography, Box, Grid } from '@mui/material'
import Table from '../../../Components/ui/Table/Table'
import {
    Row,
    Rows,
    Col,
    Cols,
    itemName,
    marginLeft,
    imageBox,
    itemDetails,
    total,
    orderInfoContainer,
    orderInfoHeader,
    orderInfoTitle,
    orderInfoCode,
    orderInfoButton,
    orderInfoButtonHover,
    orderInfoGridContainer,
    orderInfoGridItem,
    orderInfoGridItemPadding,
    orderInfoSectionTitle,
    orderInfoSectionContent,
    orderInfoSectionItem,
    orderInfoSectionItemBold,
    orderInfoAvatarContainer,
    orderInfoAvatar,
    orderInfoAvatarTextContainer,
    orderInfoAvatarText,
    orderInfoAvatarSubText,
    modalDivider,
} from '../styles'
import Avatar from '../../../Components/ui/Avatar/Avatar'
import { qdmdb7, us4jxz, sb77p4, flexAlign, divider, flexCenter } from '../styles'
const OrderDetails = ({ handleCloseOrderDetails, openOrder }) => {
    const invoiceInfo = {
        title: 'Invoice',
        item: {
            name: 'Nike airmax 270',
            seller: 'Rave BD',
            code: 'UY7234',
            location: 'Arizona USA',
        },
        name: '02.05.2021',
    }
    const orderInfo = {
        id: 'UY3769',
        customer: {
            name: 'Mark Rufflo',
            location: 'Arizona, USA',
            phone: '+003344422',
            role: 'Product Manager',
        },
        payment: {
            method: 'Paypal',
            amount: 789,
            id: '00000-XH3453',
            name: '03.02.2021',
            total: 'paid',
        },
        billing: {
            city: 'Corner view',
            address: 'Corner view, Sylhet',
            email: 'example@gmail.com',
            phone: '+013145813',
            postcode: '3100',
        },
    }
    const rows = [
        { id: '1', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
        { id: '2', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
        { id: '3', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
    ]
    const columns = [
        {
            field: 'name',
            headerName: 'Product',
            flex: 1,
        },

        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
        },

        {
            field: 'quantity',
            headerName: 'Quantity',
            flex: 1,
        },
        {
            field: 'total',
            headerName: 'Total',

            flex: 1,
        },
    ]
    const [page, setPage] = useState(1)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const tabs = [
        {
            label: 'Order Details',
            component: (
                <>
                    <hr sx={modalDivider} />

                    <Box sx={orderInfoContainer}>
                        <Box sx={orderInfoHeader}>
                            <Typography sx={orderInfoTitle}>Order Info</Typography>
                            <Box sx={orderInfoCode}> #UY3769</Box>
                        </Box>
                        <Box sx={orderInfoSectionContent}>
                            <Grid container spacing={3} sx={orderInfoGridContainer}>
                                <Grid item xs={4} sx={orderInfoGridItem}>
                                    <Typography sx={orderInfoSectionTitle}>Order From</Typography>
                                    <Box sx={orderInfoSectionContent}>
                                        <Typography sx={orderInfoSectionItemBold}>Mark Rufflo</Typography>
                                        <Typography sx={orderInfoSectionItemBold}>Arizona, USA</Typography>
                                        <Typography sx={orderInfoSectionItemBold}>+003344422</Typography>
                                        <Box sx={orderInfoAvatarContainer}>
                                            <Box sx={orderInfoAvatar}>
                                                <img
                                                    src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                                                    width="100%"
                                                    alt="User"
                                                />
                                            </Box>
                                            <Box sx={orderInfoAvatarTextContainer}>
                                                <Typography sx={orderInfoAvatarText}>Mark Rufflo</Typography>
                                                <Typography sx={orderInfoAvatarSubText}>Product Manager</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sx={orderInfoGridItem}>
                                    <Typography sx={orderInfoSectionTitle}>Payment Method</Typography>
                                    <Box sx={orderInfoSectionContent}>
                                        <Typography sx={orderInfoSectionItemBold}>Paypal</Typography>
                                        <Typography sx={orderInfoSectionItem}>Amount: $789</Typography>
                                        <Typography sx={orderInfoSectionItem}>Id: 00000-XH3453</Typography>
                                        <Typography sx={orderInfoSectionItem}>Date: 03.02.2021</Typography>
                                        <Typography sx={orderInfoSectionItem}>Status: paid</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sx={orderInfoGridItem}>
                                    <Typography sx={orderInfoSectionTitle}>Billing Address</Typography>
                                    <Box sx={orderInfoSectionContent}>
                                        <Typography sx={orderInfoSectionItemBold}>Corner view</Typography>
                                        <Typography sx={orderInfoSectionItem}>
                                            Corner view, Sylhet zindabazar
                                        </Typography>
                                        <Typography sx={orderInfoSectionItem}>Uilib@gmail.com</Typography>
                                        <Typography sx={orderInfoSectionItem}>Number: +013145813</Typography>
                                        <Typography sx={orderInfoSectionItem}>Post code: 3100</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </>
            ),
        },
        {
            label: 'Invoice',
            component: (
                <Box>
                    <hr sx={modalDivider} />

                    <Typography sx={orderInfoTitle}>Invoice</Typography>

                    <Box sx={flexCenter}>
                        <Box sx={imageBox}>
                            <img
                                src="https://uko-react.vercel.app/static/products/nike.png"
                                width="100%"
                                height="100%"
                                alt=""
                                id="style-MYKUg"
                            />
                        </Box>{' '}
                        <Box>
                            <Typography sx={itemName}>Nike airmax 270</Typography>
                            <Typography sx={itemDetails}>Rave BD</Typography>
                            <Typography sx={itemDetails}>UY7234</Typography>
                            <Typography sx={itemDetails}>Arizona USA</Typography>
                        </Box>
                        <Box sx={marginLeft}>
                            <Typography sx={total}>Date: 02.05.2021</Typography>
                        </Box>
                    </Box>

                    <Box sx={Row}>
                        <Table
                            hasCheckbox
                            hasPanigation
                            sx={{ width: '100%' }}
                            columns={columns}
                            rows={rows}
                            totalPage={3}
                            pageSize={3}
                            currentPage={page}
                            handleChangePanigation={handleChangePanigation}
                        />
                    </Box>
                    <Box sx={Row}>
                        <Box sx={sb77p4}>
                            <Box sx={flexCenter}>
                                <Typography sx={qdmdb7}>Subtotal</Typography>
                                <Typography sx={qdmdb7}>$428.00</Typography>
                            </Box>
                            <Box sx={flexCenter}>
                                <Typography sx={qdmdb7}>Discount</Typography>
                                <Typography sx={qdmdb7}>$428.00</Typography>
                            </Box>
                            <Box sx={flexCenter}>
                                <Typography sx={qdmdb7}>VAT</Typography>
                                <Typography sx={qdmdb7}>$428.00</Typography>
                            </Box>
                            <hr sx={divider} />
                            <Box sx={flexAlign}>
                                <Typography sx={us4jxz}>Total</Typography>
                                <Typography sx={us4jxz}>$428.00</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ),
        },
    ]
    return (
        <Modal className="" maxWidth="lg" onClose={handleCloseOrderDetails} open={openOrder.isOpen}>
            <Tabs tabs={tabs} />
        </Modal>
    )
}

export default OrderDetails
