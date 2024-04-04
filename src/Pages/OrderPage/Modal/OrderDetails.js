import React, { useState } from 'react'
import Modal from '../../../Components/ui/Modal/Modal'
import Tabs from '../../../Components/ui/Tabs/Tabs'
import { Typography, Box, Grid } from '@mui/material'
import Table from '../../../Components/ui/Table/Table'
import { COLOR } from '../../../Utils/Constants'
import {
    Row,
    itemName,
    marginLeft,
    imageBox,
    itemDetails,
    total,
    orderInfoContainer,
    orderInfoHeader,
    orderInfoTitle,
    orderInfoCode,
    orderInfoGridContainer,
    orderInfoGridItem,
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
import { qdmdb7, us4jxz, sb77p4, flexAlign, flexCenter } from '../styles'
const OrderDetails = ({ openOrderModal, setOpenOrderModal }) => {
    const handleClose = () => {
        setOpenOrderModal({ ...openOrderModal, isOpen: false })
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
            flex: 0.7,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 0.5,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            flex: 0.5,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'total',
            headerName: 'Total',
            flex: 0.5,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
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
                    <Box sx={orderInfoContainer}>
                        <Typography sx={orderInfoTitle}>Invoice</Typography>

                        <Box sx={{ ...flexCenter, justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex' }}>
                                {' '}
                                <Box sx={imageBox}>
                                    <img
                                        src="https://uko-react.vercel.app/static/products/nike.png"
                                        alt=""
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </Box>
                                <Box sx={{ marginLeft: '1rem', marginTop: '2.8rem' }}>
                                    <Typography sx={itemName}>Nike airmax 270</Typography>
                                    <Typography sx={itemDetails}>Rave BD</Typography>
                                    <Typography sx={itemDetails}>UY7234</Typography>
                                    <Typography sx={itemDetails}>Arizona USA</Typography>
                                </Box>
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
                                <hr />
                                <Box sx={flexAlign}>
                                    <Typography sx={us4jxz}>Total</Typography>
                                    <Typography sx={us4jxz}>$428.00</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ),
        },
    ]
    return (
        openOrderModal && (
            <Modal fullwidth={false} maxWidth={openOrderModal.size} open={openOrderModal.isOpen} onClose={handleClose}>
                <Tabs tabs={tabs} />
            </Modal>
        )
    )
}

export default OrderDetails
