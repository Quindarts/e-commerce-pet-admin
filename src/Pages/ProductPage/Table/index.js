import React, { Fragment } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'

const TableProductList = (props) => {
    const { handleChangePanigation, page, rows, totalPage } = props
    console.log(rows)
    const [value, setValue] = React.useState(2)
    // const createProductObject = (product) => {
    //     if (!product || !product._id) {
    //         console.error('Product or product id is not defined:', product)
    //         return null
    //     }

    //     return {
    //         _id: product._id,
    //         name: product.name,
    //         email: product.email,
    //         phone: product.phone,
    //         code: product.code,
    //         price: product.price,
    //         stock: product.avaiable,
    //         category: product.tags[0],
    //         active: product.isActive,
    //         description: product.description,
    //         status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
    //         rating: (
    //             <Rating
    //                 readOnly
    //                 name="simple-controlled"
    //                 value={value}
    //                 size="small"
    //                 onChange={(event, newValue) => {
    //                     setValue(newValue)
    //                 }}
    //             />
    //         ),
    //         edit: (
    //             <Stack direction="row">
    //                 <Button className="" size="md" variant="outline" color="grey" icon>
    //                     <Icon icon={APP_ICON.i_pen} />
    //                 </Button>
    //             </Stack>
    //         ),
    //         imageUrl: product.images && product.images[0] ? product.images[0].url : defaultImageUrl,
    //     }
    // }

    const columns = [
        {
            field: 'detail',
            headerName: 'Product',
            flex: 2,
            renderCell: (params) => (
                <Box className="group flex cursor-pointer gap-2 transition-colors">
                    <img className="h-[50px] w-[50px] object-cover" src={params.row.imageUrl} alt="" />
                    <Box>
                        <Typography className="text-[13px] font-[600] text-gray-600  group-hover:text-sky-600">
                            {params.rows?.name}
                        </Typography>
                        <Typography className="text-[11px] font-[500] text-gray-500 group-hover:text-sky-600">
                            {params.rows?.category}
                        </Typography>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'stock',
            headerName: 'Stock',
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'code',
            headerName: 'SKU',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'status',
            headerName: 'Status',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <Button className="font-500">{params.rows?.status}</Button>,
        },

        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'rating',
            headerName: 'Rating',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <Box className="font-500 ">{params.rows?.rating}</Box>,
        },
        {
            field: 'active',
            headerName: 'Active',
            headerAlign: 'center',
            align: 'center',
            flex: 0.7,
            renderCell: (params) => (
                <Button
                    className={`cursor-pointer rounded-[20px] ${
                        params.rows?.active
                            ? 'bg-emerald-100 px-3 py-1 text-green-600'
                            : 'bg-red-100 px-3 py-1 text-red-600'
                    }`}
                >
                    {params.rows?.active ? 'active' : 'unactive'}
                </Button>
            ),
        },
        {
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,
            renderCell: (params) => (
                <Box>
                    <Button size="lg" color="grey" variant="outline" icon>
                        <Icon icon={APP_ICON.i_eye_open} className="text-sky-500" />
                    </Button>
                    <Button size="lg" color="grey" variant="outline" icon>
                        <Icon icon="mdi:bin-outline" className="text-red-400" />
                    </Button>
                </Box>
            ),
        },
    ]
    const defaultImageUrl = ''
    return (
        <Fragment>
            <Box>
                <Table
                    hasPanigation
                    className="w-full"
                    columns={columns}
                    rows={rows}
                    totalPage={totalPage}
                    pageSize={6}
                    currentPage={page}
                    handleChangePanigation={handleChangePanigation}
                />
            </Box>
        </Fragment>
    )
}

export default TableProductList
